'use strict';

document.addEventListener("DOMContentLoaded", function () {
  var select = function select() {
    var selects = document.querySelectorAll('.js-select');

    selects.forEach(function (select) {
      var btn = select.querySelector('.js-select-btn');
      var text = select.querySelector('.js-select-text');
      var options = select.querySelectorAll('.js-select-option');

      var close = function close() {
        select.classList.remove('active');
      };

      var open = function open() {
        select.classList.add('active');
      };

      btn.addEventListener('click', function (e) {
        var isActive = select.classList.contains('active');

        if (isActive) {
          close();
        } else {
          open();
        }
      });

      options.forEach(function (option) {
        option.addEventListener('click', function () {
          var value = option.innerText;
          text.innerText = value;

          close();
        });
      });

      document.documentElement.addEventListener('click', function (event) {
        var isClickWithinOpenedDiv = top_walker(event.target, function (node) {
          return node === select;
        });
        if (isClickWithinOpenedDiv) {} else {
          close();
        }
      }, true);
    });
  };

  var field = function field() {
    var fields = document.querySelectorAll('.js-field');

    fields.forEach(function (field) {
      var input = field.querySelector('.js-field-input');
      var isValue = input.value.length != 0;

      var filled = function filled() {
        field.classList.add('filled');
      };

      var empty = function empty() {
        field.classList.remove('filled');
      };

      if (isValue) {
        filled();
      }

      input.addEventListener('keyup', function () {
        var isValue = input.value.length != 0;

        if (isValue) {
          filled();
        } else {
          empty();
        }
      });
    });
  };

  var headerMenu = function headerMenu() {
    var menu = document.querySelector('.js-menu');
    var btnOpen = document.querySelector('.js-menu-open');
    var btnClose = menu.querySelector('.js-menu-close');
    var isActive = false;

    var open = function open() {
      menu.classList.add('active');
      BG.body.classList.add('overflow', 'bg-black');
      BG.siteContent.classList.add('hide');
      BG.footer.classList.add('hide');
    };

    var close = function close() {
      menu.classList.remove('active');
      BG.body.classList.remove('overflow', 'bg-black');
      BG.siteContent.classList.remove('hide');
      BG.footer.classList.remove('hide');
    };

    btnOpen.addEventListener('click', function () {
      open();

      isActive = true;
    });

    btnClose.addEventListener('click', function () {
      if (isActive) {
        close();

        isActive = false;
      }
    });
  };

  var categoryCarousel = function categoryCarousel() {
    var sliders = document.querySelectorAll('.js-category-carousel');

    sliders.forEach(function (slider) {
      var sliderObj = tns;
      var options = {
        container: '.js-category-carousel',
        autoWidth: true,
        items: 3.3,
        gutter: 6,
        mouseDrag: true,
        swipeAngle: false,
        controls: true,
        loop: false,
        nav: false,
        responsive: {
          0: {
            controls: false
          },
          1280: {
            controls: true
          }
        }
      };

      // slider init
      sliderObj = tns(options);
    });
  };

  var cardCart = function cardCart() {
    var btns = document.querySelectorAll('.js-card-cart-btn');

    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cardBottom = btn.closest('.js-card-bottom');
        var isActive = cardBottom.classList.contains('active');

        cardBottom.classList.add('active');
      });
    });
  };

  var counter = function counter() {
    var counters = document.querySelectorAll('.js-counter');

    function parentBy(el, filter) {
      if (typeof filter !== 'function') throw new Error('filter must be a function!');
      var parent = el.parentNode,
          last;
      while (parent) {
        last = parent;
        parent = parent.parentNode;
      }
      return last;
    }

    function findAncestor(el, cls) {
      while ((el = el.parentElement) && !el.classList.contains(cls)) {}
      return el;
    }

    counters.forEach(function (counter) {
      var btnMinus = counter.querySelector('.js-counter-btn-prev');
      var btnPlus = counter.querySelector('.js-counter-btn-next');
      var number = counter.querySelector('.js-counter-number');
      var currentValue = number.value;

      number.addEventListener('keyup', function () {
        var value = number.value;

        currentValue = value;
      });

      btnMinus.addEventListener('click', function (e) {
        currentValue--;

        var cardBottom = findAncestor(e.target, 'js-card-bottom');

        if (currentValue <= 0) {
          currentValue = 1;
          cardBottom.classList.remove('active');
        }

        number.value = currentValue;
      });

      btnPlus.addEventListener('click', function () {
        currentValue++;

        number.value = currentValue;
      });
    });
  };

  var cartPopup = function cartPopup() {
    var carts = document.querySelectorAll('.js-cart');
    var popup = document.querySelector('.js-cart-popup');

    carts.forEach(function (cart) {
      cart.addEventListener('mouseenter', function () {
        popup.classList.add('active');
      });

      cart.addEventListener('mouseleave', function () {
        popup.classList.remove('active');
      });

      popup.addEventListener('mouseleave', function () {
        popup.classList.remove('active');
      });
    });
  };

  var catalogSlider = function catalogSlider() {
    var sliders = document.querySelectorAll('.js-catalog-slider');

    sliders.forEach(function (slider) {
      var sliderObj = tns;
      var options = {
        container: '.js-catalog-slider',
        loop: false,
        items: 1,
        slideBy: 1,
        nav: true,
        controls: false,
        autoplay: false,
        speed: 400,
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: false,
        autowidth: true,
        center: false,
        swipeAngle: false,
        gutter: 10,
        autoHeight: true,
        responsive: {
          0: {
            disable: false,
            nav: true
          },
          1280: {
            disable: false,
            nav: true
          }
        }
      };

      sliderObj = tns(options);
    });
  };

  var category = function category() {
    var categories = document.querySelectorAll('.js-category');
    var CATEGORY = {};
    CATEGORY.itemQuantity = 0;
    CATEGORY.itemQuantityDesktop = 8;
    CATEGORY.itemQuantitySmallDesktop = 6;
    CATEGORY.itemQuantityHorizontalTablet = 4;
    CATEGORY.itemQuantityVerticalTablet = 2;
    CATEGORY.changeQuantity = function () {
      var isDesktop = window.matchMedia("(min-width: 1280px)").matches;
      var isSmallDesktop = window.matchMedia("(min-width:1024px) and (max-width: 1279px)").matches;
      var isHorizontalTablet = window.matchMedia("(min-width:768px) and (max-width: 1023px)").matches;
      var isVerticalTablet = window.matchMedia("(max-width: 767px)").matches;

      var quantityDesktop = CATEGORY.itemQuantityDesktop;
      var quantitySmallDesktop = CATEGORY.itemQuantitySmallDesktop;
      var quantityHorizontalTablet = CATEGORY.itemQuantityHorizontalTablet;

      var quantityVerticalTablet = CATEGORY.itemQuantityVerticalTablet;

      if (isDesktop) {
        CATEGORY.itemQuantity = CATEGORY.itemQuantity + quantityDesktop;
      }

      if (isSmallDesktop) {
        CATEGORY.itemQuantity = CATEGORY.itemQuantity + quantitySmallDesktop;
      }

      if (isHorizontalTablet) {
        CATEGORY.itemQuantity = CATEGORY.itemQuantity + quantityHorizontalTablet;
      }

      if (isVerticalTablet) {
        CATEGORY.itemQuantity = CATEGORY.itemQuantity + quantityVerticalTablet;
      }

      console.log(CATEGORY.itemQuantity);
    };

    categories.forEach(function (category) {
      var items = category.querySelectorAll('.js-category-item');
      var btns = category.querySelectorAll('.js-category-btn');

      var changeItemCount = function changeItemCount() {
        var isDesktop = window.matchMedia("(min-width: 1280px)").matches;
        var isSmallDesktop = window.matchMedia("(min-width:1024px) and (max-width: 1279px)").matches;
        var isHorizontalTablet = window.matchMedia("(min-width:768px) and (max-width: 1023px)").matches;
        var isVerticalTablet = window.matchMedia("(max-width: 767px)").matches;

        if (isDesktop) {
          CATEGORY.itemQuantity = CATEGORY.itemQuantityDesktop;
        }

        if (isSmallDesktop) {
          CATEGORY.itemQuantity = CATEGORY.itemQuantitySmallDesktop;
        }

        if (isHorizontalTablet) {
          CATEGORY.itemQuantity = CATEGORY.itemQuantityHorizontalTablet;
        }

        if (isVerticalTablet) {
          CATEGORY.itemQuantity = CATEGORY.itemQuantityVerticalTablet;
        }

        items.forEach(function (item, index) {
          var isItemActive = index < CATEGORY.itemQuantity;

          if (isItemActive) {
            item.classList.remove('hide');
          } else {
            item.classList.add('hide');
          }
        });
      };

      changeItemCount();

      window.addEventListener('resize', function () {
        changeItemCount();
      });

      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          CATEGORY.changeQuantity();

          items.forEach(function (item, index) {
            var isItemActive = index < CATEGORY.itemQuantity;

            if (isItemActive) {
              item.classList.remove('hide');
            } else {
              item.classList.add('hide');
            }
          });
        });
      });
    });
  };

  var categorySelect = function categorySelect() {
    var sections = document.querySelectorAll('.js-category-select');

    // global close
    sections.forEach(function (section) {
      document.documentElement.addEventListener('click', function (event) {
        var isClickWithinOpenedDiv = top_walker(event.target, function (node) {
          return node === section;
        });
        if (isClickWithinOpenedDiv) {} else {
          var lists = section.querySelectorAll('.js-category-select-list');

          section.classList.remove('active');
          lists.forEach(function (list) {
            list.classList.remove('active');
          });
        }
      }, true);

      var menuBtn = section.querySelector('.js-category-select-btn');
      var subBtns = section.querySelectorAll('.js-category-select-sub-btn');
      var links = section.querySelectorAll('.js-category-select-link');
      var placeholder = section.querySelector('.js-category-select-placeholder');

      // close function
      var close = function close() {
        var lists = section.querySelectorAll('.js-category-select-list');

        section.classList.remove('active');
        lists.forEach(function (list) {
          list.classList.remove('active');
        });
      };

      // menu toggle
      menuBtn.addEventListener('click', function () {
        var selectList = section.querySelector('.js-category-select-list');
        var isActive = selectList.classList.contains('active');
        var nestLists = section.querySelectorAll('.js-category-select-list');
        var nestBtns = section.querySelectorAll('.js-category-select-sub-btn');

        nestLists.forEach(function (nestList) {
          nestList.classList.remove('active');
        });

        nestBtns.forEach(function (nestBtn) {
          nestBtn.classList.remove('active');
        });

        if (isActive) {
          selectList.classList.remove('active');
          section.classList.remove('active');
        } else {
          selectList.classList.add('active');
          section.classList.add('active');
        }
      });

      // menu nest listeners
      subBtns.forEach(function (subBtn) {
        subBtn.addEventListener('mouseover', function () {
          var parentList = subBtn.closest('.js-category-select-list');
          var nestLists = parentList.querySelectorAll('.js-category-select-list');
          var nestBtns = parentList.querySelectorAll('.js-category-select-sub-btn');
          var currentItem = subBtn.closest('.js-category-select-item');
          var currentList = currentItem.querySelector('.js-category-select-list');

          // hide all nest lists & disable btns
          nestLists.forEach(function (nestList) {
            nestList.classList.remove('active');
          });

          nestBtns.forEach(function (nestBtn) {
            nestBtn.classList.remove('active');
          });

          // show current list
          currentList.classList.add('active');
          subBtn.classList.add('active');
        });

        subBtn.addEventListener('click', function () {
          var text = subBtn.innerText;
          placeholder.innerText = text;

          close();
        });
      });

      links.forEach(function (link) {
        link.addEventListener('click', function () {
          var text = link.innerText;
          placeholder.innerText = text;

          close();
        });
      });
    });
  };

  var rating = function rating() {
    var ratings = document.querySelectorAll('.js-rating');

    ratings.forEach(function (rating) {
      var items = rating.querySelectorAll('.js-rating-item');

      items.forEach(function (item, index) {
        item.addEventListener('click', function () {
          var currentIndex = index;

          items.forEach(function (item, index) {
            var isMore = currentIndex < index;
            var icon = item.querySelector('.js-rating-icon');

            var activeState = function activeState() {
              item.classList.add('active');
              icon.setAttribute('src', 'assets/svg_icons/star-filled.svg');
            };

            var passiveState = function passiveState() {
              item.classList.remove('active');
              icon.setAttribute('src', 'assets/svg_icons/star-empty.svg');
            };

            if (isMore) {
              passiveState();
            } else {
              activeState();
            }
          });
        });
      });
    });
  };

  var productCategory = function productCategory() {
    var sections = document.querySelectorAll('.js-product-category');

    var getSiblings = function getSiblings(elem) {

      // Setup siblings array and get the first sibling
      var siblings = [];
      var sibling = elem.parentNode.firstChild;

      // Loop through each sibling and push to the array
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
          siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
      }

      return siblings;
    };

    sections.forEach(function (section) {
      var btnRoot = section.querySelector('.js-product-category-root-btn');
      var btnRootTextNode = btnRoot.querySelector('.js-product-category-root-btn-text');
      var btnRootText = btnRootTextNode.innerHTML;
      var btns = section.querySelectorAll('.js-product-category-btn');
      var items = section.querySelectorAll('.js-product-category-item');

      btnRoot.addEventListener('click', function () {
        var isActive = section.classList.contains('active');
        var listChild = section.querySelector('.js-product-category-list');
        var items = section.querySelectorAll('.js-product-category-li');

        var expand = function expand() {
          listChild.classList.add('active');
          section.classList.add('active');
          items.forEach(function (item) {
            item.classList.remove('hide');
          });
        };

        var stepBack = function stepBack() {
          var lists = section.querySelectorAll('.js-product-category-list');
          var activeLists = section.querySelectorAll('.js-product-category-list.active');
          var activeListLength = activeLists.length - 1;
          var listLength = lists.length - 1;

          activeLists.forEach(function (list, index) {
            var lastActive = activeListLength == index;
            var rootActive = activeListLength == 0;

            if (rootActive) {
              section.classList.remove('active');

              lists.forEach(function (list) {
                list.classList.remove('active');
              });

              btns.forEach(function (btn) {
                btn.classList.remove('hide');
              });

              items.forEach(function (item) {
                item.classList.remove('hide');
              });
            } else {
              if (lastActive) {
                var parentItem = list.closest('.js-product-category-li');
                var parentItemSiblings = getSiblings(parentItem);
                var currentBtn = parentItem.querySelector('.js-product-category-btn');
                var parent2nd = parentItem.parentNode;
                var item2nd = parent2nd.closest('.js-product-category-li');
                var isItem2nd = item2nd == null;

                // скрыть соседний список
                list.classList.remove('active');

                // показать соседнюю кнопку
                currentBtn.classList.remove('hide');

                // открыть список выше
                parentItem.classList.remove('hide');
                parentItemSiblings.forEach(function (item) {
                  item.classList.remove('hide');
                });

                // передать текст в рут кнопку
                if (!isItem2nd) {
                  var backBtnText = item2nd.querySelector('.js-product-category-btn').innerHTML;
                  btnRootTextNode.innerHTML = backBtnText;
                } else {
                  btnRootTextNode.innerHTML = btnRootText;
                }
              }
            }
          });
        };

        if (isActive) {
          stepBack();
        } else {
          expand();
        }
      });

      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var currentList = btn.closest('.js-product-category-list');
          var currentItem = btn.closest('.js-product-category-li');
          var siblings = getSiblings(currentItem);
          var nestedList = currentItem.querySelector('.js-product-category-list');
          var currentBtnText = btn.innerHTML;

          btn.classList.add('hide');
          btnRootTextNode.innerHTML = currentBtnText;

          siblings.forEach(function (item) {
            item.classList.add('hide');
          });

          currentItem.classList.remove('hide');

          nestedList.classList.add('active');
        });
      });
    });
  };

  var filter = function filter() {
    var sections = document.querySelectorAll('.js-filter');

    sections.forEach(function (section) {
      var btns = section.querySelectorAll('.js-filter-btn');
      var content = section.querySelector('.js-filter-content');

      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var isActive = section.classList.contains('active');

          if (isActive) {
            section.classList.remove('active');
          } else {
            section.classList.add('active');
          }
        });
      });
    });
  };

  var categorySlider = function categorySlider() {
    var sliders = document.querySelectorAll('.js-category-slider');

    sliders.forEach(function (slider) {
      var sliderObj = tns;
      var options = {
        container: '.js-category-slider',
        autoWidth: true,
        gutter: 14,
        mouseDrag: true,
        swipeAngle: false,
        controls: true,
        loop: false,
        nav: false,
        responsive: {
          0: {
            controls: false
          },
          1280: {
            controls: true
          }
        }
      };

      // slider init
      sliderObj = tns(options);
    });
  };

  var sort = function sort() {
    var sections = document.querySelectorAll('.js-sort');

    sections.forEach(function (section) {
      var btn = section.querySelector('.js-sort-btn');

      document.documentElement.addEventListener('click', function (event) {
        var isClickWithinOpenedDiv = top_walker(event.target, function (node) {
          return node === section;
        });
        if (isClickWithinOpenedDiv) {} else {
          section.classList.remove('active');
        }
      }, true);

      btn.addEventListener('click', function () {
        var isActive = section.classList.contains('active');

        if (isActive) {
          section.classList.remove('active');
        } else {
          section.classList.add('active');
        }
      });
    });
  };

  var searchData = function searchData() {};

  var BG = {};
  BG.body = document.querySelector('body');
  BG.ESC_CODE = 27;
  BG.siteContent = document.querySelector('.site-content');
  BG.footer = document.querySelector('.page-footer');
  BG.isIe11 = !!window.MSInputMethodContext && !!document.documentMode;

  if (BG.isIe11) {
    BG.body.classList.add('ie11');
  }

  function top_walker(node, test_func, last_parent) {
    while (node && node !== last_parent) {
      if (test_func(node)) {
        return node;
      }
      node = node.parentNode;
    }
  }

  var onPageRdy = function onPageRdy() {
    // utility
    select();
    field();
    counter();

    // specific
    cardCart();
    cartPopup();
    category();
    categorySelect();
    rating();
    headerMenu();
    productCategory();
    filter();
    sort();

    // sliders
    catalogSlider();
    categoryCarousel();
    categorySlider();
  };

  onPageRdy();
});
//# sourceMappingURL=main.js.map
