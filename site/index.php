<!DOCTYPE html>
<html lang="zxx">
  <head>
    <script src="./js/preload.js"></script>
    <meta charset="utf-8" />
    <meta name="description" content="Business Web" />
    <meta name="keywords" content="Business Web Template" />
    <meta name="author" content="D.C" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="./css/app.min.css" rel="stylesheet" type="text/css" />
    <title>Business</title>
    <link rel="manifest" href="manifest.json" />
    <link rel="apple-touch-icon" href="images/pwa-logo-small.webp" />
  </head>
  <body>
    <a class="hide" href="#main" accesskey="S"> Skip navigation </a>
    <header>
      <nav id="header-list">   
        <ul>
          <li><a accesskey="1" href="./index.php">Home</a></li>
          <li class="li-around">
            <ul>
              <li><a accesskey="t" href="tel:123-456-7890">123-456-7890</a></li>
              <li><a accesskey="m" href="mailto:name@email.com">lorem@email.com</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <h1> Adipiscin </h1>

      <div id="picture">
        <picture>
          <source
            media="(max-width: 993px)"
            srcset="./images/header-mobile.webp"
          />
          <img
            src="./images/header.webp"
            alt="header"
          />
        </picture>
        <div id="header-int">
            <div class="header-int-text-container">
              <p>
                Register your interest with us now for
                the best service guaranteed!
              </p>
              <p class="header-int-text-lower">
                Lorem ipsum dolor sit amet consectetur adipiscing elit
                eiusmod tempor incididunt.
              </p>
              <button>
                Register
              </button>
            </div>
          </div>
      </div>
    </header>
    <nav id="nav">
      <i id="menu" role="button" aria-label="Menu" class="fa-solid fa-circle-dot"></i>
      <ul class="navbar-collapse">
        <li><a href="./index.php">Home</a></li>
        <li><a href="tel:123-456-7890"><span class="mobile">123-456-7890</span><span class="desktop">Phone</span></a></li>
        <li><a href="mailto:name@email.com"><span class="mobile">lorem@email.com</span><span class="desktop">Email</span></a></li>
      </ul>     
    </nav>
    <main id="main">
      <article id="one-col-text">
        <h2 class="main-heading">Lorem ipsum ..</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat.
        </span>
        <div class="accordion" id="accordionText">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Urna diam quisque
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionText">
              <div class="accordion-body">
                Sapien ac purus risus aliquet ex. Volutpat proin arcu finibus elementum at rutrum purus consequat nisl. Dolor mauris placerat metus maximus porta curae facilisis suspendisse. 
                <br>
                <br>
                Suscipit varius sodales penatibus; sollicitudin diam fusce auctor. At libero auctor risus odio senectus penatibus. Vestibulum duis placerat fusce cubilia diam efficitur phasellus nascetur.
                Sollicitudin varius at accumsan; est egestas turpis egestas. Convallis lacus integer ad facilisis himenaeos primis ultricies. Tempus himenaeos cubilia venenatis ornare gravida faucibus duis litora sed.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Dictum cubilia sapien
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionText">
              <div class="accordion-body">
                Lobortis penatibus cubilia aliquam ut; eleifend pharetra interdum. Eros placerat habitant sodales vivamus ultricies suscipit; lectus cursus. Conubia euismod penatibus vitae dignissim arcu iaculis scelerisque. Ipsum quis penatibus tellus risus semper ligula praesent magna. Mus dictumst bibendum mauris porttitor orci in faucibus purus suscipit. 
                <br>
                <br>
                Libero dignissim montes finibus nascetur massa. Proin orci dolor, suspendisse est sem finibus nibh. Mauris fames ipsum dapibus sodales varius tristique bibendum ac congue. Ridiculus convallis euismod senectus condimentum pellentesque sodales porta.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Parturient felis
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionText">
              <div class="accordion-body">
                Convallis sagittis dapibus tortor inceptos porta suspendisse facilisis. Fames parturient adipiscing mattis dis efficitur vel aliquam diam. 
                <br>
                <br>
                Ex proin integer primis volutpat ipsum non venenatis dis. Dapibus turpis ornare ex taciti natoque ante netus, lectus sodales. Proin fusce blandit lacinia quam velit luctus imperdiet. Sit mauris sapien molestie leo urna feugiat.
              </div>
            </div>
          </div>
        </div>
      </article>
      <div id="layer-layout">
        <img
          data-aos="fade-left"
          src="./images/layer-layout-1.webp"
          width="541"
          height="339"
          alt="Business in Porgress One"
        />
        <img
          data-aos="fade-right"
          src="./images/layer-layout-2.webp"
          width="646"
          height="431"
          alt="Business in Porgress Two"
        />
        <p data-aos="zoom-in">
          <q>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </q>
          Adipiscing elit
        </p>
        <img
          data-aos="fade-up"
          src="./images/layer-layout-3.webp"
          width="597"
          height="397"
          alt="Business in Porgress Three"
        />
        <aside data-aos="fade-up">
          <div>
            <h2>
              Lorem ipsum dolor sit amet
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit ammet.
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <h3 >
              Lorem ipsum ..
            </h3>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <h3>
              Lorem ipsum ..
            </h3>
          </div>
        </aside>
      </div>
      <div class="outer" id="slider-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div class="scroll-container">
          <a class="d-md-has-height" id="figure-one" href="#">
            <figure class="scroll">
                <img src="images/slider-4-1.webp" width="661" height="463" alt="skyscraper"/>
                <figcaption>
                  <b>Dolor sit</b>
                  <br/>
                  <br/>
                  Lorem ipsum
                  dolor sit lorem ipsum amet.
                </figcaption>
            </figure>
          </a>
          <a class="d-md-0-height" id="figure-two" href="#">
            <figure class="scroll">
                <img src="images/slider-4-2.webp" width="661" height="463" alt="office"/>
                <figcaption>
                  <b>Lorem ipsum</b>
                  <br/>
                  <br/>    
                  Dolor sit
                  lorem ipsum dolor sit amet.
                </figcaption>
            </figure>   
          </a>
        </div>
      </div>
      <div id="slider-8">
        <article>
          <h3>Lorem ipsum ..</h3>
          <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </article>
       <div role="img" aria-label="job">
        <p class="scroll-two">   
          <span>  
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </span>
          <b>Lorem ipsum ..</b>
        </p>
      </div>
       <div role="img" aria-label="startup">
        <p class="scroll-two">   
          <span>  
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </span>
          <b>Lorem ipsum ..</b>
        </p>
      </div>
       <article>
        <h3>Lorem ipsum ..</h3>
        <p>  
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </article>
    </div>
    <div id="slider_2-top" class="slider_2-outer row g-0">

      <div class="slider_2-container timeline-container col-12 col-md-10 col-xl-8 mx-auto">

        <?php

        $index = 1;
        $count = -1;
        $array = array("Duis aute irure", "Lorem ipsum dolor", "Dolore magna aliqu", "Voluptate velit esse");

        while ($index < 5) {

          $direction = $index % 2 === 1 ? "flex-row" : "flex-row-reverse";
          $direction_even = $index % 2 === 1 ? "flex-row-reverse" : "flex-row";
          $justify_odd = $index % 2 === 1 ? "justify-content-md-end" : "justify-content-md-start";
          $text_direction = $index % 2 === 1 ? "text-center text-md-end" : "text-center text-md-start";

          $display = "d-none";

          if ($index === 1) {

            $display = "d-flex";
          }

          $count++;

          if ($count === count($array)) {
  
            $count = 0;
          }

        ?>

          <div class="slider_2-item timeline-item row <?php echo $direction; ?> justify-content-center <?php echo $display; ?> g-0">
          
            <div class="col-12 col-md-6 d-flex <?php echo $justify_odd; ?>">

              <div class="slider_2-line-container d-flex flex-fill <?php echo $direction_even; ?>"> 

                <div class="slider_2-line">

                  <div class="slider_2-lineinner d-flex align-items-center justify-content-center mx-auto"><div class="slider_2-linemid"></div></div>

                </div>   

                <div class="slider_2-date d-flex justify-content-center align-items-center">
                                    
                  <p class="text-center">

                    <?php echo $array[$count] ?>

                    <span class="d-block">

                      <?php 

                          echo date('Y', strtotime("200$index-01-01"));

                      ?>

                    </span>

                  </p>

                </div>

              </div>

            </div>

            <div class="slider_2-content col-12 col-md-6">

              <div class="row justify-content-center <?php echo $justify_odd; ?> g-0">

                <div class="col-9 col-md-10 <?php echo $text_direction; ?>">
                
                  <p>

                    <?php 

                      echo str_repeat(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat."
                      ,$index);

                    ?>

                  </p>

                </div>

              </div>

            </div>

          </div>

        <?php

        $index++;

        };

        ?>

        <div class="slider_2-button-container d-flex justify-content-center pt-5 pt-md-0">

          <button aria-label="see more" class="c-custom-1 timeline-button"><i class="fa-solid fa-arrow-down"></i></button>

        </div>

      </div>

    </div>
    <div id="three-col-box">
      <p>
        Consectetur adipiscing elit, sed do eiusmod.
      <p>
        Lorem ipsum dolor sit amet, consectetur.
      <p>
        Sed do ipiscing eli eiusmod sit amet tempor.
      </p>
    </div>
    <div id="slider-1">

      <div class="slider_1-outer position-relative">

        <div class="slider-container slider_1-row row d-flex flex-nowrap justify-content-start g-0">
          
          <?php

            $index = 1;

            while ($index < 5) {

              ?>

                <div class="slider-item slider_1-item">

                  <div class="slider_1-item-padding slider-padding h-100">

                    <div class="slider-body slider_1-item-body position-relative h-100">

                      <h2 class="slider_1-item-heading mb-1">

                        Lorem ipsum 

                      </h2>

                      <b class="slider_1-item-bold d-block mb-3"> Integer id suscipit </b>

                      <p class="slider_1-item-content mb-0">
                        
                        <?php echo str_repeat("Quisque in tellus lorem. Donec at elementum est. Integer id suscipit felis.", $index); ?>

                      </p>

                      <button aria-label="next" class="c-custom-1 position-absolute slider_1-button slider-next slider-next-sm"><i class="fa-solid fa-arrow-right"></i></button>

                    </div>

                  </div>
                  
                </div>

              <?php

              $index++;

            }

          ?>

        </div>

        <div class="slider_1-button-container slider-button-container d-none d-md-flex justify-content-end position-absolute">

          <button aria-label="next" class="c-custom-1 slider_1-button slider-next slider-next-md"><i class="fa-solid fa-arrow-right"></i></button>

          <button aria-label="next" class="c-custom-1 slider_1-button slider-next slider-next-lg"><i class="fa-solid fa-arrow-right"></i></button>

        </div>

      </div>

    </div>
    <section id="four-col-cards">
      <h2>Lorem ipsum ..</h2>
      <div>
        <img
          src="./images/four-col-cards-1.webp"
          width="220"
          height="147"
          alt="Persona 1"
        />
        <div>
          <h3><span class="fa-solid fa-circle-dot">&nbsp;</span>Ut enim ad</h3>
          <p>
            <span>veniam</span>
            <span>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo.
            </span>
          </p>
          <span>
            <a href="#" aria-label="facebook" class="fa-brands fa-square-facebook"></a>
            <a href="#" aria-label="twitter" class="fa-brands fa-square-twitter"></a>
            <a href="#" aria-label="google" class="fa-brands fa-square-google-plus"></a>
            <a href="#" aria-label="linkedin" class="fa-solid fa-square-share-nodes"></a>
          </span>
        </div>
        <img
          src="./images/four-col-cards-2.webp"
          width="220"
          height="147"
          alt="Persona 2"
        />
        <div>
          <h3><span class="fa-solid fa-circle-dot">&nbsp;</span>Ut enim ad</h3>
          <p>
            <span>veniam</span>
            <span>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo.
            </span>
          </p>
          <span>
            <a href="#" aria-label="facebook" class="fa-brands fa-square-facebook"></a>
            <a href="#" aria-label="twitter" class="fa-brands fa-square-twitter"></a>
            <a href="#" aria-label="google" class="fa-brands fa-square-google-plus"></a>
            <a href="#" aria-label="linkedin" class="fa-solid fa-square-share-nodes"></a>
          </span>
        </div>
      </div>
      <div>
        <img
          src="./images/four-col-cards-3.webp"
          width="220"
          height="147"
          alt="Persona 3"
        />
        <div>
          <h3><span class="fa-solid fa-circle-dot">&nbsp;</span>Ut enim ad</h3>
          <p>
            <span>veniam</span>
            <span>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo.
            </span>
          </p>
          <span>
            <a href="#" aria-label="facebook" class="fa-brands fa-square-facebook"></a>
            <a href="#" aria-label="twitter" class="fa-brands fa-square-twitter"></a>
            <a href="#" aria-label="google" class="fa-brands fa-square-google-plus"></a>
            <a href="#" aria-label="linkedin" class="fa-solid fa-square-share-nodes"></a>
          </span>
        </div>
        <img
          src="./images/four-col-cards-4.webp"
          width="220"
          height="147"
          alt="Persona 4"
        />
        <div>
          <h3><span class="fa-solid fa-circle-dot">&nbsp;</span>Ut enim ad</h3>
          <p>
            <span>veniam</span>
            <span>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut.
            </span>
          </p>
          <span>
            <a href="#" aria-label="facebook" class="fa-brands fa-square-facebook"></a>
            <a href="#" aria-label="twitter" class="fa-brands fa-square-twitter"></a>
            <a href="#" aria-label="google" class="fa-brands fa-square-google-plus"></a>
            <a href="#" aria-label="linkedin" class="fa-solid fa-square-share-nodes"></a>
          </span>
        </div>
      </div>
    </section>
    </main>
    <footer>
      <ul>
        <li><a href="./index.php">Home</a></li>
      </ul>
      <ul>
        <li><a href="mailto:name@email.com">lorem@email.com</a></li>
        <li><a href="tel:123-456-7890">123-456-7890</a></li>
        <li><i class="fa-regular fa-copyright"></i>&nbsp;<?php echo date("Y"); ?></li>
      </ul>
      <div class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
        <div class="carousel-inner">
          <div class="carousel-item active"><img src="images/footer-1.webp" width="200" height="200" alt="bing"/></div>
          <div class="carousel-item"><img src="images/footer-2.webp" width="200" height="200" alt="mortarboard"/></div>
          <div class="carousel-item"><img src="images/footer-3.webp" width="200" height="200" alt="slack"/></div>
        </div>
      </div>
    </footer>
    <script src="./js/app.min.js" defer></script>
  </body>
</html>
