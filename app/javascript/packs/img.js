$(document).ready(function () {/*DOMをすべて読み込んでから*/
  var view_box = $('.view_box'); /*inputを囲む一番大きいdiv*/

  $(".file").on('change', function(){ /*input-fileに画像が入ったらイベント発生*/
    var fileprop = $(this).prop('files')[0];/*prop filesを取得*/
    var find_img = $(view_box).find('img');/*findでimgを取得*/
    var reader = new FileReader();/*ファイルを読み込むためのObjectを生成*/
    // console.log(find_img);

     if(find_img.length){
        find_img.nextAll().remove();
        find_img.remove();
     }

    var img = '<img width="20%" alt="" class="img_view" ><a href="#" class="img_del"><i class="far fa-times-circle"></i></a>';
    
    view_box.append(img);/*imgを追加*/

    reader.onload = function() {    /*ファイルオブジェクトをloadしたら*/
      view_box.find('img').attr('src', reader.result);/*imgのsrcに挿入*/
      img_del(view_box); /*下の関数に渡す*/
    }
    reader.readAsDataURL(fileprop);/*srcを表示*/
  });
   
  function img_del(target)
  {
     target.find("a.img_del").on('click',function(){/*上から渡されたimgが入ってる*/
      {
         $('#img_label').find('input[type=file]').val('');/*inputのtypeを空に parent親要素の取得*/
         $(this).parent().find('.img_view').remove();/*imgリンクを削除*/
         $(this).remove();/*aリンクを削除*/
      }

      return false;
    });
  } 
});


