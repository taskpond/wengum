var React = require('react');
var Reflux = require('reflux');
var WengumAction = require('../actions/WengumActions');
var WengumStore = require('../stores/WengumStore');
var _ = require('lodash');

var Content = React.createClass({

  mixins: [Reflux.ListenerMixin],

  componentDidMount: function() {
    this._initWengum();

    this.listenTo(WengumStore, this._onChange);
  },

  /**
   * Set default value
   */
  _initWengum: function(){
    var $section = $('.main .section');
    var $container= $section.find('.content-container');
    /**
     * Carousel Background
     */
    $section.find('.carousel-bg').css('left', '0px');
    $.each($section.find('.carousel-bg .carousel-bg-item'), function(index, item){
      $(item).css('left', index * $section.width() + 'px');
    });

    /**
     * Carousel Item
     */
    $container.find('.carousel-content').css('left', '0px');
    $.each($container.find('.carousel-content .carousel-item'), function(index, item){
      $(item).css('left', index * $container.width() + 'px');
    });
  },

  _onChange: function(cb){
    var $nextItem = null, $nextBG = null, $nextCircle = null;
    var $section = $('.main .section');
    switch(cb.state){
      case 'next':
        // Background
        if($('.carousel-bg .carousel-bg-item.active').next().is('.carousel-bg-item')){
          $nextBG = $('.carousel-bg .carousel-bg-item.active').next();
        }
        else{
          $nextBG = $('.carousel-bg .carousel-bg-item').first();
        }
        $('.carousel-bg .carousel-bg-item').removeClass('active');
        $nextBG.addClass('active');
        $nextBG.closest('.carousel-bg').css('left', '-'+$nextBG.css('left'));

        // Item
        if($('.carousel-item.active').next().is('.carousel-item')){
          $nextItem = $('.carousel-item.active').next();
        }
        else{
          $nextItem = $('.carousel-item').first();
        }
        $('.carousel-item').removeClass('active');
        $nextItem.addClass('active');
        $nextItem.closest('.carousel-content').css('left', '-'+$nextItem.css('left'));

        // Pagination
        if($('.pagination-circle-container li.active').next().is('li')){
          $nextCircle = $('.pagination-circle-container li.active').next();
        }
        else{
          $nextCircle = $('.pagination-circle-container li').first();
        }
        $('.pagination-circle-container li').removeClass('active');
        $nextCircle.addClass('active');
        break;
      case 'click':
        var itemIndex = $(cb.id).index();
        $section.find('.active').toggleClass('active');
        $section.find('[data-index="'+itemIndex+'"]').addClass('active');

        $('.carousel-bg').css('left', '-' + $('.carousel-bg .active').css('left'));
        $('.carousel-content').css('left', '-' + $('.carousel-content .active').css('left'));
        break;
      case 'index':
        var itemIndex = cb.index;
        if(_.isEqual($section.find('.active').first().next().index(), -1)){
          itemIndex = 0;
        }
        else{
          ++itemIndex;
        }
        $section.find('.active').toggleClass('active');
        $section.find('[data-index="'+itemIndex+'"]').addClass('active');

        $('.carousel-bg').css('left', '-' + $('.carousel-bg .active').css('left'));
        $('.carousel-content').css('left', '-' + $('.carousel-content .active').css('left'));
        break;
    }
  },

  _onClick: function(e){

    e.preventDefault();
    $target = $(e.target);
    if($target.hasClass('carousel-next') || $target.hasClass('next-arrow')){
      // WengumAction.next();
      WengumAction.goToIndex($('.pagination-circle-container .active').index());
    }
    else if($target.hasClass('circle')){
      WengumAction.goTo($target.attr('href'));
    }

  },

  render: function(){
    return (
      <div className="wrapper">
        <div className="main shadow-z-2">
          <div className="section sub shadow-z-2">
            <div className="carousel-bg">
              <div className="carousel-bg-item active" data-index="0">
                <img src="./images/bg-creation-01.jpg" />
              </div>
              <div className="carousel-bg-item" data-index="1">
                <img src="./images/bg-creation-02.jpg" />
              </div>
              <div className="carousel-bg-item" data-index="2">
                <img src="./images/bg-creation-03.jpg" />
              </div>
              <div className="carousel-bg-item" data-index="3">
                <img src="./images/bg-creation-04.jpg" />
              </div>
            </div>
            <div className="container">
              <div className="content-container shadow-z-2">
                <div className="carousel">
                  <div className="carousel-scroll">
                    <div className="carousel-content ">
                      <div id="creation-01" className="carousel-item active" data-index="0">
                        <div className="carousel-item-content">
                          <h3>
                            Help everyone, everywhere - One CAPTCHA at a time.
                          </h3>
                          <p>
                            Millions of CAPTCHAs are solved by people every day. reCAPTCHA makes positive use of this human effort by channeling the time spent solving CAPTCHAs into digitizing text, annotating images, building machine learning datasets. This in turn helps preserve books, improve maps, and solve hard AI problems.
                          </p>
                        </div>
                      </div>
                      <div id="creation-02" className="carousel-item" data-index="1">
                        <div className="carousel-item-content">
                          <h3>
                            Stop a bot.<br/>Improve a map.
                          </h3>
                          <p>
                            reCAPTCHA improves our knowledge of the physical world by creating CAPTCHAs out of text visible on Street View imagery. As people verify the text in these CAPTCHAs, this information is used to make Google Maps more precise and complete. So if you're a Google Maps user, your experience (and everyone else's) will be even better.
                          </p>
                        </div>
                      </div>
                      <div id="creation-03" className="carousel-item" data-index="2">
                        <div className="carousel-item-content">
                          <h3>
                            Stop a bot.<br/>Build a bot.
                          </h3>
                          <p>
                            reCAPTCHA helps solve hard problems in Artificial Intelligence. High quality human labelled images are compiled into datasets that can be used to train Machine Learning systems. Research communities benefit from such efforts that help build the next generation of groundbreaking Artificial Intelligence solutions.
                          </p>
                        </div>
                      </div>
                      <div id="creation-04" className="carousel-item" data-index="3">
                        <div className="carousel-item-content">
                          <h3>
                            Stop a bot.<br/>Save a book.
                          </h3>
                          <p>
                            reCAPTCHA digitizes books by turning words that cannot be read by computers into CAPTCHAs for people to solve. Word by word, a book is digitized and preserved online for people to find and read.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-nav" aria-hidden="true">
                    <ul className="pagination-circle-container">
                      <li data-index="0" className="active">
                        <a href="#creation-01" className="circle" tabIndex="-1" onClick={this._onClick}>Page 1</a>
                      </li>
                      <li data-index="1" className="">
                        <a href="#creation-02" className="circle" tabIndex="-1" onClick={this._onClick}>Page 2</a>
                      </li>
                      <li data-index="2" className="">
                        <a href="#creation-03" className="circle" tabIndex="-1" onClick={this._onClick}>Page 3</a>
                      </li>
                      <li data-index="3" className="">
                        <a href="#creation-04" className="circle" tabIndex="-1" onClick={this._onClick}>Page 4</a>
                      </li>
                    </ul>

                    <div className="pagination-button-container">
                      <div className="next-container">
                        <a href="#" className="next-button carousel-next" tabIndex="-1" onClick={this._onClick}>
                          <span className="next-arrow" onClick={this._onClick}></span>
                        </a>
                      </div>
                      <div className="pagination-sub">
                        <a href="#" className="prev-arrow" tabIndex="-1">›</a>
                        <a href="#" className="next-arrow" tabIndex="-1">›</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Content;