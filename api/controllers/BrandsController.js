/**
 * BrandsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  get: function(req, res) {
    Brand.find()
      .then(brands => {
        if (!brands || brands.length === 0) {
          return res.send({
            success: false,
            message: 'No Records Found'
          });
        }
        return res.send({
          success: true,
          message: 'Records fetched',
          data: brands
        });
      })
      .catch(err => {
        sails.log.debug(err);
        return res.send({
          success: false,
          message: 'Unable to fetch records'
        });
      });
  },
  create: function(req, res) {
    sails.log.debug(req.allParams());
    Brand.create(req.allParams())
      .then(brand => {
        return res.send({
          success: true,
          message: 'Record create successfully',
          data: brand
        });
      })
      .catch(err => {
        sails.log.debug(err);
        return res.send({
          success: false,
          message: 'Unable to create record'
        });
      });
  },
  update: function(req, res) {
    sails.log.debug(req.param('id'));
    Brand.update(req.param('id'), req.allParams())
      .then(brand => {
        return res.send({
          success: true,
          message: 'Record update',
          data: brand
        });
      })
      .catch(err => {
        sails.log.debug(err);
        return res.send({
          success: false,
          message: 'Unable to update record',
          data: brand
        });
      });
  },
  delete: function(req, res) {
    sails.log.debug(req.param('id'));
    Brand.destroy(req.param('id'))
      .then(brand => {
        return res.send({
          success: true,
          message: 'Record delete',
          data: brand
        });
      })
      .catch(err => {
        sails.log.debug(err);
        return res.send({
          success: false,
          message: 'Unable to delete record',
          data: brand
        });
      });
  }
};
