import { useEffect, useMemo, useState } from "react";
import ShopCard from "../../components/card/ShopCard";
import data from "../../data/shopLocations.json";

const all = data?.locations ?? [];
const PAGE_SIZE = 2;

function uniqueLocations(shops) {
  return [...new Set(shops.map((s) => s.location).filter(Boolean))].sort();
}

export default function Location() {
  const [loc, setLoc] = useState(""); // "" = all
  const [page, setPage] = useState(1); // 1-based page

  const locations = useMemo(() => uniqueLocations(all), []);
  const filtered = useMemo(
    () => (loc ? all.filter((s) => s.location === loc) : all),
    [loc]
  );

  // pagination math
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pageItems = filtered.slice(start, end);

  // reset to first page on filter change
  useEffect(() => {
    setPage(1);
  }, [loc]);

  const canPrev = safePage > 1;
  const canNext = safePage < totalPages;

  // tiny helper so both pagers look the same
  const Pager = ({ compactInfo = false }) => (
    <div className="inline-flex items-center gap-1">
      <button
        className="rounded-lg border-secondary border px-3 py-1.5 cursor-pointer text-sm text-primary disabled:opacity-40"
        disabled={!canPrev}
        onClick={() => canPrev && setPage((p) => Math.max(1, p - 1))}
      >
        ← Prev
      </button>

      {/* numbered buttons with ellipses */}
      {[...Array(totalPages)].map((_, i) => {
        const n = i + 1;
        const show = n === 1 || n === totalPages || Math.abs(n - safePage) <= 1;

        if (!show) {
          if (
            (n === 2 && safePage > 3) ||
            (n === totalPages - 1 && safePage < totalPages - 2)
          ) {
            return (
              <span key={`dots-${n}`} className="px-1 text-gray-400">
                …
              </span>
            );
          }
          return null;
        }

        const active = n === safePage;
        return (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`rounded-lg px-3 py-1.5 text-sm border border-secondary text-primary cursor-pointer ${
              active ? "bg-primary text-white" : "bg-white"
            }`}
          >
            {n}
          </button>
        );
      })}

      <button
        className="rounded-lg border px-3 py-1.5 text-sm border-secondary text-primary cursor-pointer disabled:opacity-40"
        disabled={!canNext}
        onClick={() => canNext && setPage((p) => Math.min(totalPages, p + 1))}
      >
        Next →
      </button>

      {!compactInfo && (
        <span className="ml-3 hidden sm:inline text-sm text-gray-600">
          Page <strong>{safePage}</strong> of <strong>{totalPages}</strong>
        </span>
      )}
    </div>
  );

  return (
    <section>

        <div className="bg-[url('/assets/images/bg/location-bg.jpg')] bg-cover bg-center">
        <div className="c-space py-20 text-center">
            <h2 className="text-[55px] text-white text-shadow-[3px_4px_0px_#1F385A]">
                ⁠Born in Malaysia, made to be World’s best
            </h2>
        </div>
        </div>

      <div className="c-space">
        {/* Filter */}
        <div className="mt-14">
          <div className="mt-2 flex gap-3">
            <select
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              className="border-primary px-3 py-3 w-[200px] focus:ring-2 focus:ring-primary bg-gray-200"
            >
              <option value="">All locations</option>
              {locations.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>

            <button
              onClick={() => setLoc("")}
              className="bg-primary px-6 py-3 text-white hover:bg-customBlue cursor-pointer"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Empty state */}
        {total === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed p-10 text-center text-gray-500">
            No shops found for this location.
          </div>
        ) : (
          <>
            {/* Cards */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pageItems.map((s) => (
                <ShopCard key={s.id} shop={s} />
              ))}
            </div>

            {/* Bottom pager */}
            <div className="my-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
              <p className="text-sm text-gray-600">
                Showing <span className="font-medium">{start + 1}</span>–
                <span className="font-medium">{Math.min(end, total)}</span> of{" "}
                <span className="font-medium">{total}</span>
              </p>
              <Pager compactInfo />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
