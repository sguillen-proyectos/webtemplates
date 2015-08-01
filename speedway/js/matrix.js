(function(){
  Matrix = function(rows, cols) {
    this.init(rows, cols);
  };
  Matrix.prototype = {
    init: function() {
      this.mat = [];
      for(var i = 0; i < rows; ++i) {
        this.mat.push([]);
        for(var j = 0; j < cols; ++j) {
          this.mat[i].push(0);
        }
      }
    }
  };
}).call(document);
