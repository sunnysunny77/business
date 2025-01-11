import { events } from "./utillites.js";

export const slider_1 = () => {
  const slider_items = document.querySelectorAll(".slider-item");
  const slider_next_sm = document.querySelectorAll(".slider-next-sm");
  const slider_next_md = document.querySelector(".slider-next-md");
  const slider_next_lg = document.querySelector(".slider-next-lg");
  const slider_container = document.querySelector(".slider-container");
  const slider_body = document.querySelectorAll(".slider-body");

  if (
    slider_items.length === 0 ||
    slider_next_sm.length === 0 ||
    !slider_next_md ||
    !slider_next_lg ||
    !slider_container ||
    !slider_body
  ) {
    return;
  }

  let count = 0;

  const length = slider_items.length; 

  const init = () => {

    for (const index of slider_items) {

      index.style.transform = "";
    }
  };

  const transform_item = () => {

    for (const index of slider_items) {

      Object.assign(index.style,{ 
          
        transition: "transform 0.5s", 
        transform: `translateX(-${100 * count}%)`,
      });
    }
  };

  const reset_item_lg = () => {
        
    Object.assign(slider_next_lg.style,{ 

      transition: "right 0.425s", 
      right: "-26px"
    });
  
    init();
  };

  const reset_item_md = () => {

    Object.assign(slider_next_md.style,{ 
        
      transition: "right 0.37s", 
      right: "-26px"
    });
 
    init();
  };

  const transform_button_lg = () => {

    if (count === length - 2)  {

      Object.assign(slider_next_lg.style,{ 
        
        transition: "right 0.5s",
        right: "calc(33.333% - 17.32px)"
      });
    } else if (count === length - 1) {
        
      Object.assign(slider_next_lg.style,{ 

        transition: "right 0.5s",
        right: "calc(66.666% - 8.666px)"
      });
    }
  };

  const transform_button_md = () => {

    if (count === length - 1) {
        
      Object.assign(slider_next_md.style,{ 

        transition: "right 0.5s",
        right: "calc(50% - 13px)"
      });
    }
  };

  const disabled = (event) => {

    event.target.disabled = "true";

    setTimeout(() => {

      event.target.disabled = "";
    }, 500);
  };

  events(slider_next_lg, "click", (event) => {

    count++;

    disabled(event);

    transform_button_lg();

    if (count === length) {

      count = 0;
      reset_item_lg();
    }

    transform_item();
  });

  events(slider_next_md, "click", (event) => {

    count++;

    disabled(event);

    transform_button_md();

    if (count === length) {

      count = 0;
      reset_item_md();
    }

    transform_item();
  });

  for (const index of slider_next_sm) {

    events(index, "click", (event) => {

      count++;

      disabled(event);
      
      transform_item();

      if (count === length) {

        count = 0;
        init();
      }
      
      transform_item();
    });
  }

  events(window, "resize", () => {

    let width = window.innerWidth;

    if (width >= 768 && width < 1024) {

      if (count === length - 1) {
        
        Object.assign(slider_next_md.style,{
          transition: "none",
          right: "calc(50% - 13px)"
        });
      } else {
        
        Object.assign(slider_next_md.style,{ 

          transition: "none",
          right: "-26px"
        });
      }
    } else if (width >= 1024) {

      if (count === length - 2)  {

        Object.assign(slider_next_lg.style,{ 
          
          transition: "none",
          right: "calc(33.333% - 17.32px)"
        });
      } else if (count === length - 1) {
          
        Object.assign(slider_next_lg.style,{ 

          transition: "none",
          right: "calc(66.666% - 8.666px)"
        });
      } else {

        Object.assign(slider_next_lg.style,{ 

          transition: "none",
          right: "-26px"
        });
      }
    }
  }, { passive: true });
};
