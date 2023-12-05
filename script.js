
  document.getElementById("submitBtn").addEventListener("click", function() {
    // 質問に対する回答を取得
    const skinType = document.getElementById("skinType").value;
   

    // 診断を実行
    const diagnosis = diagnoseSkinIssue( skinType,);

    // 解決方法を表示
    showSolution(diagnosis);
});

function diagnoseSkinIssue( skinType,) {
    // 仮の診断ロジック
    let diagnosis = "通常の肌";

    if (skinType === "dry") {
        diagnosis = "乾燥肌";

    }else if (skinType === "oily"){
        diagnosis = "脂性肌";
    } else if (skinType === "sensitive") {
        diagnosis = "敏感肌";
    }else if (skinType === "half"){
        diagnosis = "混合肌";
    }

return diagnosis;
}

function showSolution(diagnosis) {
// 解決方法を表示する処理
document.getElementById("result").innerText = "診断結果: " + diagnosis;

// 診断結果に基づいたアドバイスを表示
displayAdvice(diagnosis);
}

function displayAdvice(diagnosis) {
const adviceElement = document.getElementById("advice");

// 診断結果に基づいたアドバイスの内容を設定
let advice = "アドバイス: ";

// 仮のアドバイス内容
if (diagnosis.includes("乾燥肌")) {
    advice += "保湿を重点的に行い、乾燥から肌を守りましょう。";
    advice += "乾燥肌の方は刺激物や辛い食べ物を避け、水分補給を心掛けてください。";
    recommendSkincareProducts("乾燥肌");
} else if (diagnosis.includes("脂性肌でニキビが出やすい")) {
    advice += "適切な洗顔と皮脂コントロールが大切です。";
    advice += "脂性肌の方は油分の多い食べ物や甘いものを控えめにすると良いでしょう。";
    recommendSkincareProducts("脂性肌");
} else if (diagnosis.includes("敏感肌")) {
    advice += "刺激の少ない製品を選び、優しくスキンケアを行いましょう。";
    advice += "敏感肌の方は辛い食べ物やアルコール、香辛料を控えめにすると良いでしょう。";
    recommendSkincareProducts("敏感肌");
} else {
    advice += "通常のケアが必要です。";
}

// アドバイスを表示
adviceElement.innerText = advice;
}

function recommendSkincareProducts(skinType) {
const productsElement = document.getElementById("products");
let products = "おすすめの化粧品: ";

// 仮のおすすめの化粧品
if (skinType === "乾燥肌") {
    products += "保湿クリームA、美容液B";
} else if (skinType === "脂性肌") {
    products += "オイルコントロール洗顔C、軽い保湿ジェルD";
} else if (skinType === "敏感肌") {
    products += "低刺激クレンジングE、敏感肌用化粧水F";
}

// 化粧品を表示
productsElement.innerText = products;

} document.getElementById("submitBtn").addEventListener("click", function() {
    // 質問に対する回答を取得
  
    const skinType = document.getElementById("skinType").value;
    

    // 診断を実行
    const diagnosis = diagnoseSkinIssue( skinType, );

    // 解決方法を表示
    showSolution(diagnosis);

    // 診断結果に基づいた画像を表示
    displayDiagnosisImage(diagnosis);


});

function displayDiagnosisImage(diagnosis) {
    const resultImageElement = document.getElementById("resultImage");
    const diagnosisImageElement = document.getElementById("diagnosisImage");

    // 仮の画像のURL
    const imageUrl = "./skin.jpg";

    // 診断結果に基づく画像を表示
    diagnosisImageElement.src = imageUrl;

    // 画像を表示
    resultImageElement.style.display = "block";
}


document.addEventListener('DOMContentLoaded', function() {

});

