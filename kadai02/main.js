//文字列として入力
let num1 = prompt('数値を入力してください');
//値が入っているかどうか
//0じゃないかどうか
if((num1 !== null) && (num1 !== "")) {
    num1 = parseInt(num1);
    //1以上の文字列か
    if ((num1 < 0) || (num1 === 0)) {
        alert(
            "１以上を入力してください"
        )
    }
    //偶数の場合
    if ((num1 % 2 === 0) && (num1 !== 0)) {
        document.write(
            `${num1}は偶数です`
        )
    }
    //奇数の場合
    else if (num1 % 2 === 1) {
        document.write(
            `${num1}は奇数です`
        )
    }
    //文字列の場合
    else if (isNaN(num1)) {
        alert(
            "数値を入力してください"
        )
    }
}
//キャンセル
else if ((num1 === null)) {
    alert(
        "キャンセルされました"
    )
}
//殻のままOK
else if(num1 === "") {
    alert(
        "数値を入力してください"
    )
}