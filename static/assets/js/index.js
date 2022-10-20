let FromAya;
function PageSlug(){
  let AyaArray = [];
  let aya = document.querySelectorAll(".box div p");
  let expl = document.querySelectorAll(".box-expl ul li")
  let Copy = document.querySelectorAll(".fi-br-copy");
  let copyright = "[تم نسخ هذا النص من مشروع الفرقان - حاضنة غيث: https://gheyth.github.io/]";
  //aya aya
  let CloseAyaAya = document.querySelector(".aya-aya")

  //button print
  let PrintPage = document.querySelector(".print")

  //data for dev
  let PageJson = {
    name:document.title,
    ayat: aya.length,
    content: []
  }

  ////////////////////////// ******* //////////////////////////
  //loop for data
  for (var i = 0; i < aya.length; i++) {
    const DataAyat = {
      id: FromAya + i,
      aya: aya[i].innerHTML,
      button: aya[i],
      explain: {
        expl: expl[i].innerText,
        button: expl[i]
      },
      urlmp3:FromAya + i + ".mp3",
    };
    AyaArray.push(DataAyat);

    //for DEV
    const DataJson = {
      NumberAya:FromAya + i,
      Aya: aya[i].innerHTML,
      Explain: expl[i].innerText,
    }
    PageJson.content.push(DataJson)
  }
  // console.log(PageJson)
  console.log(AyaArray)


  ////////////////////////// ******* //////////////////////////

  //BOX AYAT - .box div p
  function AyaEch(mode) {
    aya.forEach(element => {
      function AyaStart() {
        element.style.backgroundColor = null;
        element.style.opacity = "0.3";
      };
      function AyaClose() {
        element.style.backgroundColor = null;
        element.style.opacity = "1";
      }
      if (mode === true){ AyaStart() }
      else { AyaClose() };
    });
  }
  //BOX EXPLAIN - .box-expl ul li
  function ExplEch(mode) {
    expl.forEach(element => {
      function ExplStart() {
        element.style.backgroundColor = null;
        element.style.opacity = "0.3";
      };
      function ExplClose() {
        element.style.backgroundColor = null;
        element.style.opacity = "1";
      }
      if (mode === true) { ExplStart() }
      else { ExplClose() };
    });
  };
  //for copy text
  Copy.forEach(element => {
    element.addEventListener("click", () => {
      navigator.clipboard.writeText(element.parentElement.innerText + "\n" + copyright);
      Swal.fire({
          position: "bottom-start",
          icon: "success",
          title: "تم نسخ النص بنجاح",
          showConfirmButton: false,
          timer: 1300,
      });
    })
  });

  // ForEch AyaArray
  AyaArray.forEach(element => {

    //for start aya with explain
    element.button.addEventListener("click", () => {
      AyaEch(true)
      ExplEch(true)
      ModeAyaAya(true)
      StartAndStopAudio()
    });

    //for stop aya with explain
    CloseAyaAya.addEventListener("click", () => {
      AyaEch(false)
      ExplEch(false)
      ModeAyaAya(false)
    })

    //mode aya with explain
    function ModeAyaAya(mode) {
      function ModeStart() {
        //ayat
        element.button.style.backgroundColor = "#cca35a";
        element.button.style.opacity = null;
        //explain
        element.explain.button.style.backgroundColor = "#cca35a";
        element.explain.button.style.opacity = null;

        //to explain
        element.explain.button.scrollIntoView({
          block: 'center',
          inline: 'center'
        })
        //button aya-aya
        CloseAyaAya.classList.remove("opacity-30")
        CloseAyaAya.classList.add("opacity-100")
      };
      function ModeClose() {
        //ayat
        element.button.style.backgroundColor = null;
        element.button.style.opacity = null;
        //explain
        element.explain.button.style.backgroundColor = null;
        element.explain.button.style.opacity = null;

        //button aya-aya
        CloseAyaAya.classList.remove("opacity-100")
        CloseAyaAya.classList.add("opacity-30")

        //scrollTo
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (mode === true) { ModeStart() }
      else { ModeClose() };
    };
    
    //audio for ayat
    function StartAndStopAudio() {
      //box audio html
      let audio = document.getElementById("audio");
      //box mp3 wavesurfer
      let BoxMp3 = document.getElementById("mp3");

      //for clear box mp3 - for other mp3
      BoxMp3.innerHTML = "";

      // for mp3
      var wavesurfer = WaveSurfer.create({
        container: '#mp3',
        waveColor: '#cca35a',
        progressColor: '#94682A',
        barHeight:2,
        barWidth:2,
        barRadius:3
      });
      //for list mp3 : https://gheyth.github.io/ayatalfurqan/
      wavesurfer.load(`https://gheyth.github.io/ayatalfurqan/${element.urlmp3}`);
      
      //for show box audio
      audio.classList.remove("opacity-0")

      //for start mp3
      document.querySelector(".play").onclick = (e) => {
        wavesurfer.playPause()
      };
      //click icon play
      wavesurfer.on("play", () => {
        document.querySelector(".fi-rr-play").classList.toggle("hidden");
        document.querySelector(".fi-rr-pause").classList.toggle("hidden");
      })
      //click icon stop
      wavesurfer.on("pause", () => {
        document.querySelector(".fi-rr-play").classList.toggle("hidden");
        document.querySelector(".fi-rr-pause").classList.toggle("hidden");
      });
      //for stop mp3 for other mp3
      aya.forEach(element => {
        element.addEventListener("click", () => {
          wavesurfer.pause()
        })
      });
      CloseAyaAya.addEventListener("click", () => {
        wavesurfer.pause()
        audio.classList.add("opacity-0")
      });
      //style
      document.getElementsByTagName("wave")[0].style.display = "flex";
      document.getElementsByTagName("wave")[0].style.height = "45px"
      document.getElementsByTagName("wave")[1].style.borderRight = "none"
    }
  });

  //for print page
  PrintPage.addEventListener("click", () => {
    window.print();
  });

};