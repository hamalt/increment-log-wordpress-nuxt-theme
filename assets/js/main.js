(function($){
	'use script';

	/**
	 * レスポンシブ対応
	 */
	var handleWindowResize = function() {
		// モバイル
		if (/Android|iPhone|iPod/i.test(navigator.userAgent)) {
			// TODO
			return;
		}

		if (window.matchMedia('(max-width: 768px)').matches) {
			// max-width 以下になったら
			// TODO
		} else if (window.matchMedia('(min-width:769px)').matches) {
			// min-width 以上になったら
			// TODO
		}

	};
	handleWindowResize(); // 最初の調整

	// レスポンシブ処理をイベントに登録
	window.addEventListener('resize', function() {
		handleWindowResize();
	});

})(jQuery);
