(function() {
  'use strict';

   var events1 = [
    'app.record.create.show',    
    'app.record.create.change.申請区分',    
    'app.record.edit.show',
    'app.record.edit.change.申請区分',
    'app.record.detail.show',
   ];


    kintone.events.on(events1, function(event) {

 // 初期値としてフィールドを隠す

 //    kintone.app.record.setFieldShown('交換クールファンベスト用ファンセット', false);

 // ラジオボボタンフィールドの値を取得
    var RadioVal = event.record['申請区分'].value;

 // ラジオボタンは必ず1つしか値を取らないため、そのままSwich文ができる
    switch (RadioVal) {
  case '破損交換' :
    kintone.app.record.setFieldShown('交換社員スカーフ',true);
    kintone.app.record.setFieldShown('交換クールファンベスト用ファンセット', true);
    break;
  case 'サイズ交換' :
    kintone.app.record.setFieldShown('交換社員スカーフ',false);
    kintone.app.record.setFieldShown('交換クールファンベスト用ファンセット', false);
    break;
  case '未使用交換' :
    kintone.app.record.setFieldShown('交換社員スカーフ',false);
    kintone.app.record.setFieldShown('交換クールファンベスト用ファンセット', false);
    break;
  case '新規貸与' :
    kintone.app.record.setFieldShown('交換社員スカーフ',true);
    kintone.app.record.setFieldShown('交換クールファンベスト用ファンセット', true);
    break;
    }
  });
})();

