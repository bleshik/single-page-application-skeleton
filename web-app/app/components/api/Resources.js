(function() {
  this.Resources = (function() {
    function Resources($resource, baseUrl, resourcesDeclaration) {
      var json;
      this.$resource = $resource;
      this.baseUrl = baseUrl;
      this.resourcesDeclaration = resourcesDeclaration;
      json = "application/json";
      this.defineResourceMethods = (function(_this) {
        return function(baseUrl, obj) {
          var resourceName, _fn, _i, _len, _ref;
          _ref = _this.resourcesDeclaration;
          _fn = function(resourceName) {
            var resource, url;
            url = "" + baseUrl + "/" + resourceName;
            resource = function(id, q) {
              var queryParams;
              queryParams = q != null ? _(_.keys(q).filter((function(_this) {
                return function(p) {
                  return url.indexOf(p) < 0;
                };
              })(this))).map((function(_this) {
                return function(p) {
                  return p + "=:" + p;
                };
              })(this)).join("&") : "";
              return $resource(url + (id != null ? "/" + id : "") + (queryParams.length > 0 ? "?" + queryParams : ""), null, {
                get: {
                  method: 'GET',
                  headers: {
                    "Accept": json
                  }
                },
                save: {
                  method: 'POST',
                  headers: {
                    "Accept": json,
                    "Content-Type": json
                  }
                },
                update: {
                  method: 'PUT',
                  headers: {
                    "Accept": json,
                    "Content-Type": json
                  }
                },
                query: {
                  method: 'GET',
                  isArray: true,
                  headers: {
                    "Accept": json
                  }
                },
                remove: {
                  method: 'DELETE'
                },
                "delete": {
                  method: 'DELETE'
                }
              });
            };
            return obj[resourceName] = function(id) {
              if (id == null) {
                return _this.defineResourceMethods(url, {
                  query: function(q, cb) {
                    if (q == null) {
                      q = {};
                    }
                    if (typeof q === 'function') {
                      this.query({}, q);
                    }
                    return resource(null, q).query(q, cb);
                  },
                  get: function(q, cb) {
                    if (q == null) {
                      q = {};
                    }
                    if (typeof q === 'function') {
                      this.get({}, q);
                    }
                    return resource(null, q).get(q, cb);
                  },
                  save: function(newObj, cb) {
                    return resource().save(newObj, cb);
                  },
                  "delete": function(cb) {
                    return resource()["delete"]({}, cb);
                  }
                });
              } else {
                return _this.defineResourceMethods("" + url + "/" + id, {
                  update: function(newObj, cb) {
                    return resource(id).update({}, newObj, cb);
                  },
                  "delete": function(cb) {
                    return resource(id)["delete"]({}, cb);
                  },
                  get: function(cb) {
                    return resource(id).get({}, cb);
                  }
                });
              }
            };
          };
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            resourceName = _ref[_i];
            _fn(resourceName);
          }
          return obj;
        };
      })(this);
      this.defineResourceMethods(this.baseUrl, this);
    }

    return Resources;

  })();

}).call(this);
