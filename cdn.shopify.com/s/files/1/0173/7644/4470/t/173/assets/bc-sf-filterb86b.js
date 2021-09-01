var bcSfFilterSettings={general:{limit:bcSfFilterConfig.custom.products_per_page,paginationType:"infinite",loadProductFirst:!1}};var bcSfFilterTemplate={gridBorderClass:"grid-item-border",onSaleClass:"on-sale",soldOutClass:"sold-out",quickViewHtml:'<a class="quickview-button" href="javascript:void(0)" id="{{itemHandle}}" title="'+bcSfFilterConfig.label.quick_view+'"><span>'+bcSfFilterConfig.label.quick_view+"</span></a>",productGridItemHtml:'<div class="grid-item test col-xs-6 '+bcSfFilterConfig.custom.grid_item_width+' {{itemGridBorderClass}} {{itemCropImageClass}}">'+'<div class="inner product-item {{itemSoldOutClass}} {{itemSaleClass}} wow fadeIn" data-wow-delay="{{delayTime}}ms" id="product-{{itemId}}">'+'<div class="inner-top -{{itemAvailable}}">'+'<div class="product-top">'+'<div class="product-image image-swap {{itemFlipImageLabel}}" data-collections-related="{{itemCollectionRelated}}">'+'<a href="{{itemUrl}}" class="test product-grid-image" data-collections-related="{{itemCollectionRelated}}">'+'<img src="{{itemThumbUrl}}" alt="{{itemTitle}}" class="images-one">'+"{{itemImageTwo}}"+"</a>"+"</div>"+"{{itemLabels}}"+'<div class="product-des abs-center">'+"{{itemWishlist}}"+"</div>"+'<div class="product-des abs-bottom">'+"{{itemSizeSwatches}}"+"{{itemQuickView}}"+"</div>"+"</div>"+'<div class="product-bottom">'+"{{itemVendor}}"+'<a class="product-title" href="{{itemUrl}}">{{itemTitle}}</a>'+"{{itemReviews}}"+'<div class="price-box">{{itemPrice}}</div>'+"{{itemAddToCart}}"+"{{itemColorSwatches}}"+"</div>"+'<div class="product-details">'+"{{itemVendor}}"+'<a class="product-title" href="{{itemUrl}}">{{itemTitle}}</a>'+"{{itemReview}}"+'<div class="short-description">{{itemDescription}}</div>'+'<div class="price-box">{{itemPrice}}</div>'+"{{itemColorSwatches}}"+'<div class="action">{{itemAddToCart}}</div>'+"{{itemWishlist}}"+"</div>"+"</div>"+"</div>"+"</div>",productListItemHtml:'<div class="grid-item product-item {{itemSoldOutClass}} {{itemSaleClass}} wow fadeIn" data-wow-delay="{{delayTime}}ms" id="product-{{itemId}}">'+'<div class="product-image">'+'<a href="{{itemUrl}}" class="product-list-thumb product-grid-image">'+'<img src="{{itemThumbUrl}}" alt="{{itemTitle}}">'+"</a>"+"{{itemLabels}}"+"</div>"+'<div class="product-details">'+'<a class="product-title" href="{{itemUrl}}">{{itemTitle}}</a>'+"{{itemVendor}}"+"{{itemReview}}"+'<div class="short-description">{{itemDescription}}</div>'+"{{itemColorSwatches}}"+'<div class="price-box">{{itemPrice}}</div>'+'<div class="action">{{itemAddToCart}}</div>'+"{{itemWishlist}}"+"</div>"+"</div>",previousActiveHtml:'<li class="text"><a href="{{itemUrl}}" title="'+bcSfFilterConfig.label.toolbar_previous+'"><i class="fa fa-angle-left" aria-hidden="true"></i><span>'+bcSfFilterConfig.label.toolbar_previous+"</span></a></li>",previousDisabledHtml:'<li class="disabled"><i class="fa fa-angle-left" aria-hidden="true"></i><span>'+bcSfFilterConfig.label.toolbar_previous+"</span></li>",nextActiveHtml:'<li class="text test"><a href="{{itemUrl}}" title="'+bcSfFilterConfig.label.toolbar_next+'"><span>'+bcSfFilterConfig.label.toolbar_next+'</span><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>',nextDisabledHtml:'<li class="disabled"><i class="fa fa-angle-right" aria-hidden="true"></i><span>'+bcSfFilterConfig.label.toolbar_next+"</span></li>",pageItemHtml:'<li><a href="{{itemUrl}}">{{itemTitle}}</a></li>',pageItemSelectedHtml:'<li class="active"><span>{{itemTitle}}</span></li>',pageItemRemainHtml:"<li><span>{{itemTitle}}</span></li>",paginateHtml:"{{previous}}{{pageItems}}{{next}}",sortingHtml:'<span class="bc-sf-filter-sorting-label">'+bcSfFilterConfig.label.sorting+'</span><label><span><span class="bc-sf-filter-top-sorting-label">'+bcSfFilterConfig.label.sorting+'</span></span></label><ul class="bc-sf-filter-filter-dropdown">{{sortingItems}}</ul>'};function buildWishlist(e){var t="";if(bcSfFilterConfig.custom.enable_wishlist){var a=e.id.toString();var i=e.id.toString();for(var r in bcSfFilterConfig.customer.tags){var l=bcSfFilterConfig["customer"]["tags"][r];l.indexOf(i)>-1&&(a="x"+l),0==a.length&&(a=i)}if(a.length>0){var s=((a.length-i.length)/2).toString();var o=!((s=s.split(".")).length>1&&s[1].indexOf("5")>-1)}t+='<a class="wishlist" data-icon-wishlist href="#" data-product-handle="'+e.handle+'"title="'+bcSfFilterConfig.label.wishlist_note+'" data-id="'+e.id+'">'+'<i class="fa fa-heart" aria-hidden="true"></i>'+'<span class="wishlist-text text-hover">'+bcSfFilterConfig.label.add_to_wishlist+"</span>"+"</a>"}return t}function buildReviews(e){var t="";return t=null!==bcsffilter.getProductMetafield(e,"judgeme","badge")?"<div style='text-align: center;' class='jdgm-widget jdgm-preview-badge' data-id='"+e.id+"'>"+bcsffilter.getProductMetafield(e,"judgeme","badge").replace(/\|/g,'"')+"</div>":'<div style="text-align: center;" class="jdgm-widget jdgm-preview-badge" data-id="4347749826614"><div style="display:none" class="jdgm-prev-badge" data-average-rating="0.00" data-number-of-reviews="0" data-number-of-questions="0"> <span class="jdgm-prev-badge__stars" data-score="0.00" tabindex="0" aria-label="0.00 stars"> <span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span><span class="jdgm-star jdgm--off"></span> </span> <span class="jdgm-prev-badge__text"> No reviews </span> </div></div>'}function buildSizeSwatches(e){var t="";if(bcSfFilterConfig.custom.enable_size_swatch&&e.available&&e.variants.length>0){for(var a in t+='<ul class="sizes-list">',e.options){var i;if("size"==e["options"][a].toLowerCase()){var r="";var l="";var s=0;for(var o in e.variants){var n=e["variants"][o];var c;if(l=n["options"][a],-1==r.indexOf(l))s<4&&(t+='<li class="size-item">',t+='<a title="'+l+'" href="'+e.url+"?variant="+n.id+'">'+l+"</a>",t+="</li>"),r=r+l+" ",s++}s>=4&&(t+='<li class="item-size-more">',t+='<a href="{{itemUrl}}" title="More Size">+'+(s-3)+"</a>",t+="</li>",s=0)}}t+="</ul>"}return t}function buildColorSwatches(e){var t="";if(bcSfFilterConfig.custom.display_item_swatch){for(var a in t+='<ul class="item-swatch">',e.options){var i;if("color"==e["options"][a].toLowerCase()){var r="";var l="";var s=0;for(var o in e.variants){var n=e["variants"][o];if(l=n["options"][a],-1==r.indexOf(l)){if(s<4){var c;var p="white"==bcsffilter.slugify(l)?"border: 1px solid #cbcbcb;":"";var d=bcsffilter.optimizeImage(n.image,"24x");var m="";var u="#fff";if(null!==n.image)m="data-img='"+bcsffilter.optimizeImage(n.image)+"'";else{var f=n.option_color.toLowerCase().replace(/ /g,"-");var g=n.option_color.toLowerCase().split(" ");var v=g.length-1;""!==g[v]&&"colors"!==g[v]&&(u=g[v]),d=bcSfFilterConfig.general.asset_url.replace("bc-sf-filter.js",f+".png")}t+="<li>",t+='<div class="tooltip">'+l+"</div>",t+='<label style="'+p+"background-image: url("+d+"); background-color: "+u+';"'+m+"></label>",t+="</li>"}var b;r=r+l+" ",s++}}s>4&&(t+='<li class="item-swatch-more">',t+='<a href="{{itemUrl}}" title="More Color">+'+(s-4)+"</a>",t+="</li>",s=0)}}t+="</ul>"}return t}function buildDefaultLink(e,t){var a=window.top.location.href.split("?")[0];return a+="?"+e+"="+t}BCSfFilter.prototype.buildProductGridItem=function(e,t,a){var i=e.images_info;var r=!e.available;var l=e.compare_at_price_min>e.price_min;var s=e.price_min!=e.price_max;var o=e.product_type;var n=e["variants"][0];if(null!==getParam("variant")&&""!=getParam("variant")){var c=e.variants.filter((function(e){return e.id==getParam("variant")}));"undefined"!=typeof c[0]&&(n=c[0])}else for(var p=0;p<e["variants"].length;p++)if(e["variants"][p].available){n=e["variants"][p];break}var d=bcSfFilterTemplate.productGridItemHtml;d=bcSfFilterConfig.custom.product_image_border?d.replace(/{{itemGridBorderClass}}/g,bcSfFilterTemplate.gridBorderClass):d.replace(/{{itemGridBorderClass}}/g,""),d=bcSfFilterConfig.custom.product_image_crop?d.replace(/{{itemCropImageClass}}/g,"crop_image"):d.replace(/{{itemCropImageClass}}/g,"no_crop_image"),d=r?d.replace(/{{itemSoldOutClass}}/g,bcSfFilterTemplate.soldOutClass):d.replace(/{{itemSoldOutClass}}/g,""),d=(d=l?d.replace(/{{itemSaleClass}}/g,bcSfFilterTemplate.onSaleClass):d.replace(/{{itemSaleClass}}/g,"")).replace(/{{delayTime}}/g,bcSfFilterConfig.custom.time_lazy_load*t);var m=i.length>0?this.optimizeImage(i[0]["src"],"275X272"):bcSfFilterConfig.general.no_image_url;var u=i.length>1?this.optimizeImage(i[1]["src"],"275x275"):m;if(this.queryParams.hasOwnProperty("pf_opt_color")){var f=this.queryParams.pf_opt_color;for(var g=0;g<f.length;g++){var v=f[g].toLowerCase();for(var p=0;p<e.variants.length;p++){var b=e["variants"][p];if(b.hasOwnProperty("merged_options")&&b["merged_options"].length>0)for(var h=0;h<b["merged_options"].length;h++){var _;if(b["merged_options"][h].toLowerCase().indexOf(v)>-1){var m=b["image"];break}}}}}d=d.replace(/{{itemThumbUrl}}/g,m);var y=i.length>1?"image-swap ":"";d=(d=(d=d.replace(/{{itemFlipImageLabel}}/g,y)).replace(/{{itemThumbUrl}}/g,m)).replace(/{{itemFlipImageUrl}}/g,u);var S="";(l||r)&&(S+='<div class="product-label">',l&&(S+='<strong class="label sale-label">'+bcSfFilterConfig.label.sale+"</strong>"),r&&(S+='<strong class="label sold-out-label">'+bcSfFilterConfig.label.sold_out+"</strong>"),S+="</div>"),d=d.replace(/{{itemLabels}}/g,S);var C="";l?(C+='<p class="sale">',C+='<span class="old-price"> '+this.formatMoney(e.compare_at_price_min).replace(".00","")+"</span>",C+='<br><span class="special-price no">',s&&(C+="<em>"+bcSfFilterConfig.label.from_price+" </em>"),C+=this.formatMoney(e.price_min).replace(".00",""),C+="</span>",C+="</span></p>","india-products"==current_shop_code&&(C+="<p class='avaibility_pin''>Price & availability may vary on your pin code.</p>")):(C+='<p class="regular-product"><span>',s&&(C+="<em>"+bcSfFilterConfig.label.from_price+" </em>"),C+=this.formatMoney(e.price_min,this.moneyFormat).replace(".00",""),C+="</span></p>","india-products"==current_shop_code&&(C+="<p class='avaibility_pin''>Price & availability may vary on your pin code.</p>"));var w="";d=(d=(d=d.replace(/{{itemPrice}}/g,C)).replace(/{{itemReviews}}/g,buildReviews(e))).replace(/{{itemVendor}}/g,w);var F=Cookies.get("frozen_ns_pin");var T=Cookies.get("hotel_ns_pin");var x=Cookies.get("dairymilk_ns_pin");var k="";if(bcSfFilterConfig.custom.display_button)if(page_url.indexOf("subscriptions")>-1){var k='<div class="action product-shop">';if($.getJSON("/cart.json",(function(t){$.each(t.items,(function(t,a){a.product_id==e.id&&(k+="<center>"+a.quantity+" Added In Cart</center>")}))})),k+='<form action="/cart/add" method="post" class="variants"  id="grid-product-form-{{itemId}}" data-id="product-actions-{{itemId}}" enctype="multipart/form-data">',r)1==skip_pincode?k+='<button id="pincode-popup-check" class="pincode-popup-check btn" type="button">Buy Now</button>':k+='<input class="asf btn sold-out-btn" type="submit" value="'+bcSfFilterConfig.label.unavailable+'" disabled="disabled"/>';else{if(e.variants.length>1)k+='<a class="btn" href="{{itemUrl}}" title="{{itemTitle}}">'+bcSfFilterConfig.label.select_options+"</a>";else{k+='<input type="hidden" name="id" value="'+n.id+'" />';var P=e.tags;k+='<input type="hidden" name="quantity" value="1" />',k+='<div class="qty-group" restrict="1" qtyy="1"><a data-minus-qttt="" class="minus button"></a><input type="text" name="quantity" value="1"> <a data-plus-qttt="" class="plus button"></a> </div>',k+='<button class="btn add-to-cart-btn subscription-button subs-{{itemId}}" onclick="add_subs(this)" type="button"  data-img="'+u+'" data-product_id="{{itemId}}" data-title="{{itemTitle}}" data-price="'+e.price_min+'" data-sku="'+n.sku+'" data-form-id="#-{{itemId}}" data-translate="products.product.add_to_cart">add to subscription  </button>'}1==skip_pincode&&(k+='<button id="pincode-popup-check" class="pincode-popup-check btn" type="button">Buy Now</button>')}k+=" </form></div>"}else{var k='<div class="action product-shop  testeded">';if($.getJSON("/cart.json",(function(t){$.each(t.items,(function(t,a){a.product_id==e.id&&(console.log(a.product_id,"item.id---{{itemId}}",e.id,"==",a.quantity),k+="<center>"+a.quantity+" Added In Cart</center>")}))})),k+='<form action="/cart/add" method="post" class="variants" id="grid-product-form-{{itemId}}" data-id="product-actions-{{itemId}}" enctype="multipart/form-data">',r&&1!=skip_pincode)k+='<input class="btn sold-out-btn" type="submit" value="'+bcSfFilterConfig.label.unavailable+'" disabled="disabled"/>';else if("india-products"!=current_shop_code)if(e.variants.length>1)k+='<a class="btn" href="{{itemUrl}}" title="{{itemTitle}}">'+bcSfFilterConfig.label.select_options+"</a>";else{k+='<input type="hidden" name="id" value="'+n.id+'" />';var P=e.tags;k+='<input type="hidden" name="quantity" value="1" />',-1!=P.indexOf("restrict_to_one")?k+='<div class="qty-group" restrict="1" qtyy="1"><a data-minus-qttt="" class="minus button"></a><input type="text" name="quantity" value="1"> <a data-plus-qttt="" class="plus button"></a> </div>':k+='<div class="qty-group" data="'+e.tags+'" qtyy="1"><a data-minus-qttt="" class="minus button"></a><input type="text" name="quantity" value="1"> <a data-plus-qttt="" class="plus button"></a> </div>';var j=e.product_type;k+="true"==F&&"Frozen Snacks"==j||"true"==T&&"Hotel"==j||"true"==x&&"Dairy Milk"==j?'<label class="btn not_serviceable">Not Servicable</label>':"<button data-btn-addToCart qsto="+e.variants[0].inventory_quantity+' class="btn add-to-cart-btn" type="submit" data-form-id="#grid-product-form-{{itemId}}" data-translate="products.product.add_to_cart">'+bcSfFilterConfig.label.add_to_cart+"</button>"}else k+='<button id="pincode-popup-check" class="pincode-popup-check btn" type="button">Buy Now</button>';k+=" </form></div>"}d=d.replace(/{{itemAddToCart}}/g,k);var I=window.location.pathname+"?view=related";d=(d=d.replace(/{{itemCollectionRelated}}/g,I)).replace(/{{itemSizeSwatches}}/g,buildSizeSwatches(e));var q="";bcSfFilterConfig.custom.enable_quick_view&&(q=bcSfFilterTemplate.quickViewHtml),d=(d=(d=d.replace(/{{itemQuickView}}/g,q)).replace(/{{itemColorSwatches}}/g,buildColorSwatches(e))).replace(/{{itemWishlist}}/g,buildWishlist(e));var H="";H=i.length>1?'<span class="images-two tes"><img src="'+u+'" alt="{{itemTitle}}" /></span>':'<span class="images-two t"><img src="'+m+'" alt="{{itemTitle}}" /></span>',d=d.replace(/{{itemImageTwo}}/g,H);var O="";if(""!=e.body_html){var Q=(O=jQ("<p>"+e.body_html+"</p>").text()).split("[/countdown]");O=Q.pop(),O=this.truncateByWord(O,50)}return d=(d=(d=(d=(d=(d=d.replace(/{{itemDescription}}/g,O)).replace(/{{itemAvailable}}/g,e.available)).replace(/{{itemId}}/g,e.id)).replace(/{{itemHandle}}/g,e.handle)).replace(/{{itemTitle}}/g,e.title)).replace(/{{itemUrl}}/g,e.url)},BCSfFilter.prototype.buildProductListItem=function(e,t,a){var i=e.images_info;var r=!e.available;var l=e.compare_at_price_min>e.price_min;var s=e.price_min!=e.price_max;var o=e["variants"][0];if(null!==getParam("variant")&&""!=getParam("variant")){var n=e.variants.filter((function(e){return e.id==getParam("variant")}));"undefined"!=typeof n[0]&&(o=n[0])}else for(var c=0;c<e["variants"].length;c++)if(e["variants"][c].available){o=e["variants"][c];break}var p=bcSfFilterTemplate.productListItemHtml;p=r?p.replace(/{{itemSoldOutClass}}/g,bcSfFilterTemplate.soldOutClass):p.replace(/{{itemSoldOutClass}}/g,""),p=(p=l?p.replace(/{{itemSaleClass}}/g,bcSfFilterTemplate.onSaleClass):p.replace(/{{itemSaleClass}}/g,"")).replace(/{{delayTime}}/g,bcSfFilterConfig.custom.time_lazy_load*t);var d=i.length>0?this.optimizeImage(i[0]["src"]):bcSfFilterConfig.general.no_image_url;p=p.replace(/{{itemThumbUrl}}/g,d);var m="";(l||r)&&(m+='<div class="product-label">',l&&(m+='<strong class="label">'+bcSfFilterConfig.label.sale+"</strong>"),r&&(m+='<strong class="sold-out-label">'+bcSfFilterConfig.label.sold_out+"</strong>"),m+="</div>"),p=p.replace(/{{itemLabels}}/g,m);var u="";l?(u+='<p class="sale">',u+='<span class="old-price money"> '+this.formatMoney(e.compare_at_price_min).toFixed(2)+"</span>",u+=s?'<br><span class="special-price check"><em>'+bcSfFilterConfig.label.from_price+" </em>":'<br><span class="special-price">',u+=this.formatMoney(e.price_min,this.moneyFormat).toFixed(2),u+="</span></p>"):(u+='<p class="regular-product">',u+=s?'<span class="money"><em>'+bcSfFilterConfig.label.from_price+" </em>"+this.formatMoney(e.price_min).toFixed(2)+"</span>":'<span class="money">'+this.formatMoney(e.price_min).toFixed(2)+"</span>","india-products"==current_shop_code&&(u+="<p class='avaibility_pin''>Price & availability may vary on your pin code.</p> "),u+="</p>");var f="";p=(p=p.replace(/{{itemPrice}}/g,u)).replace(/{{itemVendor}}/g,f);var g='<form action="/cart/add" method="post" class="variants" id="product-actions-{{itemId}}" enctype="multipart/form-data" style="padding:0px;">';r?g+='<input class="btn add-to-cart-btn" type="submit" value="'+bcSfFilterConfig.label.unavailable+'" disabled="disabled"/>':e.variants.length>1?g+='<input class="btn" type="button" onclick="window.top.location.href=\'{{itemUrl}}\'" value="'+bcSfFilterConfig.label.select_options+'" />':(g+='<input type="hidden" name="id" value="'+o.id+'" />',g+='<input class="btn add-to-cart-btn" type="submit" value="'+bcSfFilterConfig.label.add_to_cart+'" />'),g+="</form>",p=p.replace(/{{itemAddToCart}}/g,g);var v="";bcSfFilterConfig.custom.enable_quick_view&&(v=bcSfFilterTemplate.quickViewHtml),p=p.replace(/{{itemQuickView}}/g,v);var b=bcSfFilterConfig.custom.display_product_reviews?bcSfFilterTemplate.reviewHtml:"";p=(p=(p=p.replace(/{{itemReview}}/g,b)).replace(/{{itemColorSwatches}}/g,buildColorSwatches(e))).replace(/{{itemWishlist}}/g,buildWishlist(e));var h="";if(-1!==e.body_html.indexOf("[countdown]")){var _=(h=jQ("<p>"+e.body_html+"</p>").text()).split("[/countdown]");h=_.pop(),h=this.truncateByWord(h,50)}return p=(p=(p=(p=(p=p.replace(/{{itemDescription}}/g,h)).replace(/{{itemId}}/g,e.id)).replace(/{{itemHandle}}/g,e.handle)).replace(/{{itemTitle}}/g,e.title)).replace(/{{itemUrl}}/g,this.buildProductItemUrl(e))},BCSfFilter.prototype.buildPagination=function(e){var t=parseInt(this.queryParams.page);var a=Math.ceil(e/this.queryParams.limit);if(1==a)return jQ(this.selector.pagination).html(""),!1;if("default"==this.getSettingValue("general.paginationType")){var i=bcSfFilterTemplate.paginateHtml;var r=t>1?bcSfFilterTemplate.previousActiveHtml:bcSfFilterTemplate.previousDisabledHtml;r=r.replace(/{{itemUrl}}/g,this.buildToolbarLink("page",t,t-1)),i=i.replace(/{{previous}}/g,r);var l=t<a?bcSfFilterTemplate.nextActiveHtml:bcSfFilterTemplate.nextDisabledHtml;l=l.replace(/{{itemUrl}}/g,this.buildToolbarLink("page",t,t+1)),i=i.replace(/{{next}}/g,l);var s=[];for(var o=t-1;o>t-3&&o>0;o--)s.unshift(o);t-4>0&&s.unshift("..."),t-4>=0&&s.unshift(1),s.push(t);var n=[];for(var c=t+1;c<t+3&&c<=a;c++)n.push(c);t+3<a&&n.push("..."),t+3<=a&&n.push(a);var p="";var d=s.concat(n);for(var m=0;m<d.length;m++)"..."==d[m]?p+=bcSfFilterTemplate.pageItemRemainHtml:p+=d[m]==t?bcSfFilterTemplate.pageItemSelectedHtml:bcSfFilterTemplate.pageItemHtml,p=(p=p.replace(/{{itemTitle}}/g,d[m])).replace(/{{itemUrl}}/g,this.buildToolbarLink("page",t,d[m]));i=i.replace(/{{pageItems}}/g,p),jQ(this.selector.pagination).html(i)}},BCSfFilter.prototype.buildFilterSorting=function(){if(bcSfFilterTemplate.hasOwnProperty("sortingHtml")){var e=this;var t=jQ(e.getSelector("topSorting"));t.empty();var a=this.getSortingList();if(a){var i="";for(var r in a){var l=e.queryParams.sort==r?"active":"";i+='<li><a data-bc-sort-value="'+a[r]+'" href="#" data-bc-sort="'+r+'" class="'+l+'">'+a[r]+"</a></li>"}var s=bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g,i);t.html(s),t.removeClass("bc-sf-filter-sort-active"),t.find(".bc-sf-filter-top-sorting-label").text(t.find('a[data-bc-sort="'+e.queryParams.sort+'"]').data("bc-sort-value"))}}},BCSfFilter.prototype.buildSortingEvent=function(){var e=this;var t=jQ(e.getSelector("topSorting"));t.find("a").click((function(t){t.preventDefault(),onInteractWithToolbar(t,"sort",e.queryParams.sort,jQ(this).data("bc-sort"))})),t.find("label").click((function(e){e.preventDefault(),t.find(".bc-sf-filter-filter-dropdown").is(":animated")||(t.find(".bc-sf-filter-filter-dropdown").toggle(),t.toggleClass("bc-sf-filter-sort-active"))}))},BCSfFilter.prototype.buildExtrasProductList=function(e){"undefined"!=typeof bcElla&&(bcElla.initAddToCart(),bcElla.initGroupedAddToCart(),bcElla.changeQuantityAddToCart(),bcElla.initStickyAddToCart(),bcElla.initQuickView(),bcElla.initColorSwatchGrid())},BCSfFilter.prototype.buildAdditionalElements=function(e){if(jQ("#bc-sf-filter-total-products").length>0&&e.products.length>0){var t=1==this.queryParams.page?this.queryParams.page:(this.queryParams.page-1)*this.queryParams.limit+1;var a=t+e.products.length-1;var i=jQ("#bc-sf-filter-total-products");var r=bcSfFilterConfig.label.toolbar_showing+" "+t+"-"+a+" "+bcSfFilterConfig.label.toolbar_of+" "+e.total_product;i.empty().html(r)}jQ(document).ready((function(e){console.log("test test",current_shop_code);var t=localStorage.getItem("Skip_pincode");console.log(t),setTimeout((function(){"india-products"==current_shop_code&&(jQ(".pincode-popup-check").text("Buy Now"),$(".product-bottom .qty-group").hide()),jQ(".pincode-popup-check.btn").on("click",(function(){jQ(".pincode-warpper").show(),jQ(".add-to-cart-btn").show()}))}),300)}))},jQ("[name='plan']").change((function(){jQ(".select-day").show(),jQ(".select-wrapper > div").hide();var e=jQ(this).val();console.log(e),jQ("."+e).show()})),$("body").on("click",".bundle-product-list .remove-product",(function(){var e=jQ(this).attr("data-main_id");var t=jQ(this).attr("data-product_id");delete added_subscription_porduct[e],console.log("test binary",added_subscription_porduct),jQ(this).parents(".have-product").remove(),countPrice();var a=$("body").find("[data-product_id='"+t+"']");console.log(a,"find_remove_button"),jQ(a).attr("disabled",!1),jQ(a).text("Add to Subscription")})),BCSfFilter.prototype.buildDefaultElements=function(e){if(bcSfFilterConfig.general.hasOwnProperty("collection_count")&&jQ("#bc-sf-filter-bottom-pagination").length>0){var t=bcSfFilterConfig.general.collection_count,a=parseInt(this.queryParams.page),i=Math.ceil(t/this.queryParams.limit);if(1==i)return jQ(this.selector.pagination).html(""),!1;if("default"==this.getSettingValue("general.paginationType")){var r=bcSfFilterTemplate.paginateHtml,l="";l=(l=a>1?bcSfFilterTemplate.hasOwnProperty("previousActiveHtml")?bcSfFilterTemplate.previousActiveHtml:bcSfFilterTemplate.previousHtml:bcSfFilterTemplate.hasOwnProperty("previousDisabledHtml")?bcSfFilterTemplate.previousDisabledHtml:"").replace(/{{itemUrl}}/g,buildDefaultLink("page",a-1)),r=r.replace(/{{previous}}/g,l);var s="";s=(s=a<i?bcSfFilterTemplate.hasOwnProperty("nextActiveHtml")?bcSfFilterTemplate.nextActiveHtml:bcSfFilterTemplate.nextHtml:bcSfFilterTemplate.hasOwnProperty("nextDisabledHtml")?bcSfFilterTemplate.nextDisabledHtml:"").replace(/{{itemUrl}}/g,buildDefaultLink("page",a+1)),r=r.replace(/{{next}}/g,s);for(var o=[],n=a-1;n>a-3&&n>0;n--)o.unshift(n);a-4>0&&o.unshift("..."),a-4>=0&&o.unshift(1),o.push(a);for(var c=[],p=a+1;p<a+3&&p<=i;p++)c.push(p);a+3<i&&c.push("..."),a+3<=i&&c.push(i);for(var d="",m=o.concat(c),u=0;u<m.length;u++)"..."==m[u]?d+=bcSfFilterTemplate.pageItemRemainHtml:d+=m[u]==a?bcSfFilterTemplate.pageItemSelectedHtml:bcSfFilterTemplate.pageItemHtml,d=(d=d.replace(/{{itemTitle}}/g,m[u])).replace(/{{itemUrl}}/g,buildDefaultLink("page",m[u]));r=r.replace(/{{pageItems}}/g,d),jQ(this.selector.pagination).html(r)}}if(bcSfFilterTemplate.hasOwnProperty("sortingHtml")&&jQ(this.selector.topSorting).length>0){jQ(this.selector.topSorting).html("");var f=this.getSortingList();if(f){var g="";for(var v in f)g+='<option value="'+v+'">'+f[v]+"</option>";var b=bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g,g);jQ(this.selector.topSorting).html(b);var h=void 0!==this.queryParams.sort_by?this.queryParams.sort_by:this.defaultSorting;jQ(this.selector.topSorting+" select").val(h),jQ(this.selector.topSorting+" select").change((function(e){window.top.location.href=buildDefaultLink("sort_by",jQ(this).val())}))}}},BCSfFilter.prototype.prepareProductData=function(e){var t=e.length;for(var a=0;a<t;a++){e[a]["images"]=e[a]["images_info"],e[a]["images"].length>0?e[a]["featured_image"]=e[a]["images"][0]:e[a]["featured_image"]={src:bcSfFilterConfig.general.no_image_url,width:"",height:"",aspect_ratio:0},e[a]["url"]="/products/"+e[a].handle;var i=[];var r=e[a]["options_with_values"].length;for(var l=0;l<r;l++)i.push(e[a]["options_with_values"][l]["name"]);if(e[a]["options"]=i,"undefined"!=typeof bcSfFilterConfig.general.currencies&&bcSfFilterConfig.general.currencies.length>1){var s=bcSfFilterConfig.general.current_currency.toLowerCase().trim();function o(e,t){return"undefined"!=typeof t?t:e}e[a].price_min=o(e[a].price_min,e[a]["price_min_"+s]),e[a].price_max=o(e[a].price_max,e[a]["price_max_"+s]),e[a].compare_at_price_min=o(e[a].compare_at_price_min,e[a]["compare_at_price_min_"+s]),e[a].compare_at_price_max=o(e[a].compare_at_price_max,e[a]["compare_at_price_max_"+s])}e[a]["price_min"]*=100,e[a]["price_max"]*=100,e[a]["compare_at_price_min"]*=100,e[a]["compare_at_price_max"]*=100,e[a]["price"]=e[a]["price_min"],e[a]["compare_at_price"]=e[a]["compare_at_price_min"],e[a]["price_varies"]=e[a]["price_min"]!=e[a]["price_max"];var n=e[a]["variants"][0];if(null!==getParam("variant")&&""!=getParam("variant")){var c=e.variants.filter((function(e){return e.id==getParam("variant")}));"undefined"!=typeof c[0]&&(n=c[0])}else{var p=e[a]["variants"].length;for(var l=0;l<p;l++)if(e[a]["variants"][l].available){n=e[a]["variants"][l];break}}e[a]["selected_or_first_available_variant"]=n;var p=e[a]["variants"].length;for(var l=0;l<p;l++){var d=[];var m=1;var u;var f=e[a]["variants"][l]["merged_options"];if(Array.isArray(f)){var g=f.length;for(var v=0;v<g;v++){var b=f[v].split(":");e[a]["variants"][l]["option"+(parseInt(v)+1)]=b[1],e[a]["variants"][l]["option_"+b[0]]=b[1],d.push(b[1])}e[a]["variants"][l]["options"]=d}e[a]["variants"][l]["compare_at_price"]=100*parseFloat(e[a]["variants"][l]["compare_at_price"]),e[a]["variants"][l]["price"]=100*parseFloat(e[a]["variants"][l]["price"])}e[a]["description"]=e[a]["content"]=e[a]["body_html"],e[a].hasOwnProperty("original_tags")&&e[a]["original_tags"].length>0&&(e[a].tags=e[a]["original_tags"].slice(0))}return e},$("ul#bc-sf-filter-bottom-pagination li").click((function(e){e.preventDefault(),e.stopPropagation()})),BCSfFilter.prototype.buildFilterSelectionData=function(e){function t(e,t,a,i){return a=a.replace(/(<([^>]+)>)/gi,""),t=t.replace(/(<([^>]+)>)/gi,""),e=(e=(e=e.replace(/{{itemType}}/g,t)).replace(/{{itemLabel}}/g,a)).replace(/{{itemLink}}/g,i)}var a=this;var i="";var r="style2"==this.getSettingValue("general.refineByStyle")?this.getTemplate("filterRefineItem2"):this.getTemplate("filterRefineItem");var l=e.filter.options;var s=Object.keys(a.queryParams);s=s.filter((function(e){return 0==e.indexOf("pf_")})),jQ.each(s,(function(e,s){var o=l.filter((function(e){return e.filterOptionId==s}))[0];if("undefined"!=typeof o&&a.queryParams.hasOwnProperty(s)&&a.queryParams[s]&&a.queryParams[s].length){var n=a.queryParams[s],c=o.filterOptionId,p=o.filterType,d=o.displayType,m=o.prefix,u=o.label;if(m="undefined"!=typeof m&&null!==m&&!1!==m?m.replace(/\\/g,""):"",Array.isArray(n)||(n=[n]),"range"==d){var f="";if(-1==p.indexOf("price")&&-1==p.indexOf("variants_price")&&"weight"!==p&&-1==p.indexOf("range_slider")){var g=[];o&&o.hasOwnProperty("values")&&(g=o["values"].map((function(e){return e.key})));var v=g.length?a.getAdvancedRangeSelectedValues(n,g):[n[0],n[n.length-1]];f=v[0].toString().replace(m,""),n.length>1&&(f+=" - "+v[1].toString().replace(m,""));var b=a.buildClearFilterOptionLink(c,u,n)}else{var h,_=(h=n[0]).split(":");if("price"==p||"variants_price"==p){var y=a.formatMoney(100*_[0]),S=a.formatMoney(100*_[1]);a.getSettingValue("general.removePriceDecimal")&&(y=a.removeDecimal(y),S=a.removeDecimal(S)),f=y+" - "+S}else f=_[0]+" - "+_[1];var b=a.buildClearFilterOptionLink(c,u,h)}i+=t(r,u,f,b)}else for(var e=0;e<n.length;e++){var h,f=h=n[e];f=a.customizeFilterOptionLabel(f,m,p);var b=a.buildClearFilterOptionLink(c,u,h);switch("undefined"!=typeof m&&null!==m&&!1!==m&&(m=m.replace(/\\/g,""),h=h.replace(m,"").trim()),p){case"price":case"variants_price":f=a.getPriceLabel(h);break;case"percent_sale":f=a.getPercentSaleLabel(h);break;case"stock":f="true"===h?o.values[0].label:o.values[1].label;break;case"review_ratings":var C=!!o.hasOwnProperty("showExactRating")&&o.showExactRating;f=a.getReviewRatingsLabel(h,C);break}i+=t(r,u,f,b)}}}));var o=window.location.search;if(""!==o){var n=(o=o.replace("?","")).split("&");-1!==n.indexOf("_=pf")&&n.splice(n.indexOf("_=pf"),1),0==jQ("#bc-sf-filter-params").length?jQ("body").append('<input type="hidden" id="bc-sf-filter-params" value="'+n.join("|")+'" />'):jQ("#bc-sf-filter-params").attr("value",n.join("|"))}return i},BCSfFilter.prototype.initFilter=function(){return this.isBadUrl()?void(window.location.href=window.location.pathname):(this.updateApiParams(!1),void this.getFilterData("init"))},BCSfFilter.prototype.isBadUrl=function(){try{var e=decodeURIComponent(window.location.search).split("&"),t=!1;if(e.length>0)for(var a=0;a<e.length;a++){var i=e[a],r=(i.match(/</g)||[]).length,l=(i.match(/>/g)||[]).length,s=(i.match(/alert\(/g)||[]).length,o=(i.match(/execCommand/g)||[]).length;if(r>0&&l>0||r>1||l>1||s||o){t=!0;break}}return t}catch(e){return!0}};
//# sourceMappingURL=/s/files/1/0173/7644/4470/t/173/assets/bc-sf-filter.js.map?v=13390304261546883160
