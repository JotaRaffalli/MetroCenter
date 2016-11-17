/**
 * QueryController
 *
 * @description :: Server-side logic for managing queries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	



  Consulta: function (req, res) {

    if (req.param('id-query')== 1) {var id = 1;return res.view('query', { tabla: results, id: id });}
     else if (req.param('id-query')== 2) {var id = 2;return res.view('query', { tabla: results });}
      else  if (req.param('id-query')== 3) {var id = 3;return res.view('query', { tabla: results });}
        else  if (req.param('id-query')== 4) {var id = 4;return res.view('query', { tabla: results });}
          else  if (req.param('id-query')== 5) {var id = 5;return res.view('query', { tabla: results });}

  }


};

