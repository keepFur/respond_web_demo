window.onload = function() {
  // 实现轮播图功能
  var controlBtns = this.document.querySelectorAll('.ad .control>li');
  var imgItems = this.document.querySelectorAll('.ad .item');
  controlBtns.forEach(function(item, index) {
    item.addEventListener('click', function(event) {
      var index = parseInt(this.getAttribute('data-index'));
      setClassName(controlBtns, '');
      setClassName([this], 'active');
      setClassName(imgItems, 'item hide');
      setClassName([imgItems[index]], 'item show');
    });
  });

  /**
   *为批量元素设置类名
   *
   * @param {any} eles 设置的元素
   * @param {any} classNames 类名
   */
  function setClassName(eles, className) {
    if (eles) {
      eles.forEach(function(ele, index) {
        ele.className = className;
      });
    }
  }
};
