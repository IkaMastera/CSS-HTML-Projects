const button = document.querySelector("button"),
      toast = document.querySelector(".toast"),
      closeIcon = document.querySelector(".close"),
      progress = document.querySelector(".progress");

      button.addEventListener("click", () => {
        toast.classList.add("active");
        progress.classList.add("active");
      });

      closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");
      });