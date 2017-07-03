/**
 * Created by qingshan on 17-7-2.
 */


/**
 *
 */
function initAll() {
    var allRolesMap={
        junqi:'军棋',
        siling:'司令',
        junzhang:'军长',
        shizhang1:'师长',
        shizhang2:'师长',
        lvzhang1:'旅长',
        lvzhang2:'旅长',
        tuanzhang1:'团长',
        tuanzhang2:'团长',
        yingzhang1:'营长',
        yingzhang2:'营长',
        lianzhang1:'连长',
        lianzhang2:'连长',
        lianzhang3:'连长',
        paizhang1:'排长',
        paizhang2:'排长',
        paizhang3:'排长',
        gongbing1:'工兵',
        gongbing2:'工兵',
        gongbing3:'工兵',
        dilei1:'地雷',
        dilei2:'地雷',
        dilei3:'地雷',
        zhadan1:'炸弹',
        zhadan2:'炸弹'
    };

    allRolesList = ["junqi","siling","junzhang","shizhang1","shizhang2","lvzhang1","lvzhang2","tuanzhang1","tuanzhang2","yingzhang1","yingzhang2","lianzhang1","lianzhang2","lianzhang3","paizhang1","paizhang2","paizhang3","gongbing1","gongbing2","gongbing3","dilei1","dilei2","dilei3","zhadan1","zhadan2"];
    redRolesList = ["junqi","siling","junzhang","shizhang1","shizhang2","lvzhang1","lvzhang2","tuanzhang1","tuanzhang2","yingzhang1","yingzhang2","lianzhang1","lianzhang2","lianzhang3","paizhang1","paizhang2","paizhang3","gongbing1","gongbing2","gongbing3","dilei1","dilei2","dilei3","zhadan1","zhadan2"];
    blueRolesList = ["junqi","siling","junzhang","shizhang1","shizhang2","lvzhang1","lvzhang2","tuanzhang1","tuanzhang2","yingzhang1","yingzhang2","lianzhang1","lianzhang2","lianzhang3","paizhang1","paizhang2","paizhang3","gongbing1","gongbing2","gongbing3","dilei1","dilei2","dilei3","zhadan1","zhadan2"];

    function huaqizi(hori,vert,hongorlan,role) {
        theNodeHandler = $("#bh"+hori+"v"+vert);
        theNodeHandler.removeClass("bingzhan");
        if(hongorlan == "hong"){
            theNodeHandler.addClass("hongfangan");
        }
        if(hongorlan == "lan"){
            theNodeHandler.addClass("lanfangan");
        }

        theNodeHandler.text(role);
    }


    notInitList = [
        "0,6","1,6","2,6","3,6","4,6",
        "1,2","3,2","2,3","1,4","3,4",
        "1,8","3,8","2,9","1,10","3,10",
    ];

    for(v=12; v>-1; v--){
        for(h=4; h>-1; h--){
            if(notInitList.indexOf(h+','+v) == -1){
                if(redRolesList.length > 0){
                    bror = Math.random();
                }else{
                    bror = 0;
                }
                seed = Math.random();
                if(bror<0.5 && blueRolesList.length>0){
                    theRole = blueRolesList[parseInt(blueRolesList.length*seed)];
                    huaqizi(h,v,"lan",allRolesMap[theRole]);
                    blueRolesList.splice(parseInt(blueRolesList.length*seed), 1);
                }else{
                    theRole = redRolesList[parseInt(redRolesList.length*seed)];
                    huaqizi(h,v,"hong",allRolesMap[theRole]);
                    redRolesList.splice(parseInt(redRolesList.length*seed), 1);
                }
            }

        }
    }
}

//
initAll();

$("div[id^='bh']").click(function(){
    mm = $("#"+this.id);
    if(this.className == "lanfangan"){
        mm.removeClass("lanfangan");
        mm.addClass("lanfangqizi");
    }
    if(this.className == "hongfangan"){
        mm.removeClass("hongfangan");
        mm.addClass("hongfangqizi");
    }

});