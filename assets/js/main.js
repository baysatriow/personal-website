// Education Section
window.addEventListener("load", function () {
  const workExperience = [
    {
      companyName: "Catamyst",
      companyURL: "http://catamyst.com",
      title: "Front End Web Developer",
      dateRange: "August 2022 - October 2022",
      eduDetails: [
        "Catamyst Intermediate Student Batch 1",
        "Catamyst Basic Student Batch 1",
      ],
    },
    {
      companyName: "SMK Telkom Lampung",
      companyURL: "https://www.smktelkom-lpg.sch.id",
      title: "Student",
      dateRange: "July 2020 - Present",
      eduDetails: [
        "RPL Student SMK Telkom Lampung",
        "1st Frontend Web Dev 2021 in HMIF FT-UMJ",
        "Lead Of Student Council SMK Telkom Lampung 2020-2022",
        "Lead Of GoldenZ Team",
        "Lead Of XII RPL Class",
        "Part Of Paskibra STELLA 2020-2022",
        "Part Of English Club STELLA 2021-2022",
        "Part Of Pramuka STELLA 2021-2022",
        "Part Of IOT STELLA 2022",
        "Part Of IT Development Team STELLA 2020-2022",
      ],
    },
    {
      companyName: "SMP N 1 Kotaagung",
      companyURL: "https://dapo.kemdikbud.go.id/sekolah/714ACC4081D19C2050AC",
      title: "Student",
      dateRange: "July 2017 - June 2020",
      eduDetails: [
        "Student Of SMP N 1 Kotaagung",
        "Part Of Student Council SMP N 1 Kotaagung 2017-2019",
        "Part Of English Club SMP N 1 Kotaagung 2017-2018",
        "1st Traditional Music Competition 2017 in Tanggamus",
        "2nd Scrabble Competition 2018 in Lampung",
        "3rd Design Graphic Competition 2019 in Tanggamus",
      ],
    },
    {
      companyName: "SDN 1 Soponyono",
      companyURL: "https://dapo.kemdikbud.go.id/sekolah/4F6F8F3B47210264B542",
      title: "Student",
      dateRange: "July 2012 - May 2017",
      eduDetails: [
        "Student Of SDN 1 Soponyono",
        "Lead Of The Class From I-V",
        "3rd Science Olympic event 2015 in Tanggamus",
      ],
    },
  ];

  function addLineBreak() {
    let isMobile = window.matchMedia("(max-width: 500px)").matches;
    let mobileLineBreak = "";

    if (isMobile) {
      mobileLineBreak = "<br />";
    } else {
      mobileLineBreak = "";
    }

    return mobileLineBreak;
  }

  const initExperienceSection = () => {
    let br = addLineBreak();

    for (let i = 0; i < workExperience.length; i++) {
      document.querySelector("#eduList").innerHTML += `<li data-index=${i}>
                    <div class="edu-button ease-transition">${workExperience[i].companyName}</div>
                </li>`;
    }

    document
      .querySelectorAll("#eduList > li div")[0]
      .classList.add("edu-button-selected");

    document.querySelector(
      ".eduTitle"
    ).innerHTML = `${workExperience[0].title} ${br} <span class="at-symbol">@</span> <a class="animate-links" href="${workExperience[0].companyURL}" target="_blank">${workExperience[0].companyName}</a>`;

    document.querySelector(".eduDateRange").textContent =
      workExperience[0].dateRange;

    workExperience[0].eduDetails.forEach((bullet) => {
      document.querySelector(
        "#edu-bulletpoints ul"
      ).innerHTML += `<li>${bullet}</li>`;
    });
  };

  function renderExperienceSection(event) {
    if (event.target.matches(".edu-button-selected")) {
      return;
    } else {
      let br = addLineBreak();

      document.querySelector("#edu-bulletpoints ul").innerHTML = "";

      let index = event.target.parentElement.attributes["data-index"].value;

      document.querySelector(
        ".eduTitle"
      ).innerHTML = `${workExperience[index].title} ${br} <span class="at-symbol">@</span> <a class="animate-links" href="${workExperience[index].companyURL}" target="_blank">${workExperience[index].companyName}</a>`;

      document.querySelector(".eduDateRange").textContent =
        workExperience[index].dateRange;

      workExperience[index].eduDetails.forEach((bullet) => {
        document.querySelector(
          "#edu-bulletpoints ul"
        ).innerHTML += `<li>${bullet}</li>`;
      });

      document
        .querySelectorAll("#eduList li div")
        .forEach((el) => el.classList.remove("edu-button-selected"));
      event.target.classList.add("edu-button-selected");
    }
  }

  function smoothScrollToCenter(elementId) {
    const el = document.getElementById(elementId);

    const position = elementId === "projects-section" ? "start" : "center";

    el.scrollIntoView({
      behavior: "smooth",
      block: position,
      inline: position,
    });
  }

  document.addEventListener(
    "click",
    function (event) {
      if (event.target.matches(".edu-button")) {
        renderExperienceSection(event);
      }
    },
    false
  );
  initExperienceSection();
});

(function ($) {
  "use strict";

  var nav = $("nav");
  var navHeight = nav.outerHeight();
  $(".navbar-toggler").on("click", function () {
    if (!$("#mainNav").hasClass("navbar-reduce")) {
      $("#mainNav").addClass("navbar-reduce");
    }
  });

  // START PRELOADED
  $(window).on("load", function () {
    $(".loader").delay(500).fadeOut("slow");
  });

  // Navbar Menu Reduce
  $(window).trigger("scroll");
  $(window).on("scroll", function () {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
      $(".navbar-expand-md").addClass("navbar-reduce");
      $(".navbar-expand-md").removeClass("navbar-trans");
    } else {
      $(".navbar-expand-md").addClass("navbar-trans");
      $(".navbar-expand-md").removeClass("navbar-reduce");
    }
    if ($(window).scrollTop() > top) {
      $(".scrolltop-mf").fadeIn(1000, "easeInOutExpo");
    } else {
      $(".scrolltop-mf").fadeOut(1000, "easeInOutExpo");
    }
  });

  // Back to top button
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  //  Star ScrollTop
  $(".scrolltop-mf").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  //  Star Scrolling nav
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - navHeight + 30,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: navHeight,
  });

  // HOME TYPED JS
  if ($(".element").length) {
    $(".element").each(function () {
      $(this).typed({
        strings: [
          $(this).data("text1"),
          $(this).data("text2"),
          $(this).data("text3"),
        ],
        loop: $(this).data("loop") ? $(this).data("loop") : false,
        backDelay: $(this).data("backdelay") ? $(this).data("backdelay") : 2000,
        typeSpeed: 10,
      });
    });
  }

  //  MagnificPopup
  var magnifPopup = function () {
    $(".popup-img").magnificPopup({
      type: "image",
      removalDelay: 300,
      mainClass: "mfp-with-zoom",
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
        duration: 300, // duration of the effect, in milliseconds
        easing: "ease-in-out", // CSS transition easing function
        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function (openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is("img")
            ? openerElement
            : openerElement.find("img");
        },
      },
    });
  };
  // Call the functions
  magnifPopup();
})(jQuery);
