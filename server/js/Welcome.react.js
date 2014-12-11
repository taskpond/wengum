var React           = require('react');
var Carousel        = require('../reactComponents/react-wengum/Carousel');
var CarouselBGItem  = require('../reactComponents/react-wengum/CarouselBGItem');
var CarouselContent = require('../reactComponents/react-wengum/CarouselContent');
var CarouselItem    = require('../reactComponents/react-wengum/CarouselItem');

var WengumPage = React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <Carousel>

          <CarouselBGItem>
            <img src="./images/bg-creation-01.jpg" />
            <img src="./images/bg-creation-02.jpg" />
            <img src="./images/bg-creation-03.jpg" />
            <img src="./images/bg-creation-04.jpg" />
          </CarouselBGItem>

          <CarouselContent>

            <CarouselItem header="Help everyone, everywhere - One CAPTCHA at a time.">
              <p>
                Millions of CAPTCHAs are solved by people every day. reCAPTCHA makes positive use of this human effort by channeling the time spent solving CAPTCHAs into digitizing text, annotating images, building machine learning datasets. This in turn helps preserve books, improve maps, and solve hard AI problems.
              </p>
            </CarouselItem>
            <CarouselItem header="Stop a bot.<br/>Improve a map.">
              <p>
                reCAPTCHA improves our knowledge of the physical world by creating CAPTCHAs out of text visible on Street View imagery. As people verify the text in these CAPTCHAs, this information is used to make Google Maps more precise and complete. So if you're a Google Maps user, your experience (and everyone else's) will be even better.
              </p>
            </CarouselItem>
            <CarouselItem header="Stop a bot.<br/>Build a bot.">
              <p>
                reCAPTCHA helps solve hard problems in Artificial Intelligence. High quality human labelled images are compiled into datasets that can be used to train Machine Learning systems. Research communities benefit from such efforts that help build the next generation of groundbreaking Artificial Intelligence solutions.
              </p>
            </CarouselItem>
            <CarouselItem header="Stop a bot.<br/>Save a book.">
              <p>
                reCAPTCHA digitizes books by turning words that cannot be read by computers into CAPTCHAs for people to solve. Word by word, a book is digitized and preserved online for people to find and read.
              </p>
            </CarouselItem>

          </CarouselContent>

        </Carousel>
      </div>
    );
  }
});

module.exports = WengumPage;