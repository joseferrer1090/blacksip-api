/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  get: function(req, res) {
    User.find()
      .then(users => {
        if (!users || users.length === 0) {
          return res.send({
            success: false,
            message: 'No Records Found'
          });
        }
        return res.send({
          success: true,
          message: 'Records fetched',
          data: users
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
    User.create(req.allParams())
      .then(user => {
        return res.send({
          success: true,
          message: 'Record create successfully',
          data: user
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
    User.update(req.param('id'), req.allParams())
      .then(user => {
        return res.send({
          success: true,
          message: 'Record update',
          data: user
        });
      })
      .catch(err => {
        sails.log.debug(err);
        return res.send({
          success: false,
          message: 'Unable to update record',
          data: user
        });
      });
  },
  delete: function(req, res) {
    sails.log.debug(req.param('id'));
    User.destroy(req.param('id'))
      .then(user => {
        return res.send({
          success: true,
          message: 'Record delete',
          data: user
        });
      })
      .catch(err => {
        sails.log.debug(err);
        return res.send({
          success: false,
          message: 'Unable to delete record',
          data: user
        });
      });
  }
};
