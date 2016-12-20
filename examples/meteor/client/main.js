import { Template } from 'meteor/templating';
import './main.html';
import { uploadFiles, removeFiles } from 's3-uploader';

Template.info.events({
  'click .upload': function(event, instance) {
		uploadFiles({
			authorizer: Meteor.call.bind(this, "authorize_upload"),
			files:instance.$("input.file_bag")[0].files
			uploadComplete: function(err, res) {},
			uploadDidProgress: function(err, res) {},
		});
  },
  'click .remove': function(event, instance) {
  	removeFiles({
  		urls: ["relative_url_1", "relative_url_2"],
  		removeComplete: function(err, res) {},
  	})
  },
});
