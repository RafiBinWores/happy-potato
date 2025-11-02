      (function () {
        const openBtn = document.getElementById("openSidebar");
        const closeBtn = document.getElementById("closeSidebar");
        const sidebar = document.getElementById("mobileSidebar");
        const backdrop = document.getElementById("backdrop");

        function open() {
          sidebar.classList.remove("-translate-x-full");
          backdrop.classList.remove("pointer-events-none");
          backdrop.classList.add("opacity-100");
          openBtn?.setAttribute("aria-expanded", "true");
          // Lock scroll
          document.documentElement.style.overflow = "hidden";
        }
        function close() {
          sidebar.classList.add("-translate-x-full");
          backdrop.classList.add("pointer-events-none");
          backdrop.classList.remove("opacity-100");
          openBtn?.setAttribute("aria-expanded", "false");
          document.documentElement.style.overflow = "";
        }

        openBtn?.addEventListener("click", open);
        closeBtn?.addEventListener("click", close);
        backdrop?.addEventListener("click", close);
        window.addEventListener("keydown", (e) => {
          if (e.key === "Escape") close();
        });
      })();