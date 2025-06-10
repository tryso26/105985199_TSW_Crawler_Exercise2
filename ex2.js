var name,price,platform;
        name = 'for ASTRA.[CD] [通常盤] / HACHI';
        price = '3,300円';
        platform = 'rakuten.co.jp';
function fnAlert(){
    var msg = name + "\n" + price + "\n" + platform;
    alert(msg+"\n"+"已成功下訂。");
    alert("開玩笑的。");
};
window.onload = function() {
    const textElement = document.getElementById('intro_text');
    const text_jp = "スマートフォン配信アプリ「REALITY」から誕生したアーティスト。透明感のあるシルキーボイスと歌唱力に感情を揺さぶられるユーザーが続出し話題となりファンを増やしている。活動の場をYouTubeに移し、週2回行われる歌配信では、最大の武器であるエモーショナルな歌とリスナーの心に寄り添うコミュニケーションにより登録者数が急増している。2022年9月には初の有観客ライブ「Midnight blue」を実施。その人気は海を越え、台湾、韓国をはじめ北米などでのユーザーから支持を得ている。日本、海外、配信、バーチャルを舞台に活動する次世代アーティストとして注目が高まっている。";
    const text_MC = "HACHI是一位從手機直播應用程式「REALITY」誕生的歌手。他以透明感十足、如絲絹般的嗓音和卓越的歌唱能力撼動了眾多用戶的心弦，話題不斷而逐步積累了眾多粉絲。活動平台轉移至YouTube後，開始在每週兩次的歌唱直播中，呈現她最擅長的武器——足以滲透情感底層的歌聲，以及與心靈相伴的對話，更使得訂閱數量迅速增加。2022年9月舉行了首次現場演唱會「Midnight blue」。她的人氣跨越國界，獲得來自台灣、韓國以及北美等地用戶的支持。作為在日本、海外、直播以及虛擬舞台活動的次世代歌手，受到了廣泛的關注。";
    // 當鼠標移入時顯示MC文本
    textElement.addEventListener('mouseover', function() {
        textElement.textContent = text_MC;
    });
    // 當鼠標移出時恢復顯示jp文本
    textElement.addEventListener('mouseout', function() {
        textElement.textContent = text_jp;
    });
};
