/*!
  riox.js v0.0.2
  https://github.com/kkeeth/riox
  Released under the MIT License.
*/
(function () {
    'use strict';

    var riox = {exports: {}};

    (function (module) {
    	/* riox v0.0.2, @license MIT */
    	const _rioxApi = ['on', 'off', 'trigger'];
    	const DEFAULT_NAME = 'default';
    	const riox = {
    	    _stores: [],
    	    addStore: function (store, name) {
    	        name = name || DEFAULT_NAME;
    	        this._stores[name] = store;
    	    },
    	    reset: function (name) {
    	        this._stores[name] = [];
    	    },
    	    resetAll: () => {
    	        this._stores = [];
    	    },
    	    getStore: function (key) {
    	        key = key || DEFAULT_NAME;
    	        return this._stores[key];
    	    },
    	    getStoreAll: function () {
    	        return this._stores;
    	    },
    	};
    	_rioxApi.forEach(function (api) {
    	    riox[api] = function () {
    	        const args = [].slice.call(arguments);
    	        for (const [_key, store] of Object.entries(this._stores)) {
    	            store[api].apply(store, args);
    	        }
    	    };
    	});
    	module.exports = riox;
    	
    } (riox));

    var riox_1 = riox.exports;

    return riox_1;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlveC5qcyIsInNvdXJjZXMiOlsic3JjL3Jpb3gudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBQTtLQUNBLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQTtLQUN6QyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUE7SUFFOUIsQ0FBQSxNQUFNLElBQUksR0FBRztTQUNYLE9BQU8sRUFBRSxFQUFFO0lBQ1gsS0FBQSxRQUFRLEVBQUUsVUFBVSxLQUFLLEVBQUUsSUFBSSxFQUFBO0lBQzdCLFNBQUEsSUFBSSxHQUFHLElBQUksSUFBSSxZQUFZLENBQUE7YUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUE7VUFDM0I7U0FDRCxLQUFLLEVBQUUsVUFBVSxJQUFJLEVBQUE7YUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7VUFDeEI7U0FDRCxRQUFRLEVBQUUsTUFBSztJQUNiLFNBQUEsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUE7VUFDbEI7U0FDRCxRQUFRLEVBQUUsVUFBVSxHQUFHLEVBQUE7SUFDckIsU0FBQSxHQUFHLEdBQUcsR0FBRyxJQUFJLFlBQVksQ0FBQTtJQUN6QixTQUFBLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtVQUN6QjtTQUNELFdBQVcsRUFBRSxZQUFBO2FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO1VBQ3BCO01BQ0YsQ0FBQTtJQUVELENBQUEsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsRUFBQTtTQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBQTthQUNWLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3JDLFNBQUEsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2lCQUN4RCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtjQUM5QjtJQUNILE1BQUMsQ0FBQTtJQUNILEVBQUMsQ0FBQyxDQUFBO0tBRWlDLE1BQUEsQ0FBQSxPQUFBLEdBQWlCLElBQUksQ0FBQTs7Ozs7Ozs7Ozs7OyJ9
