let areaName = "";

// 메인 페이지에서 지역을 클릭하면 해당 지역 상세 페이지로 이동 
function clickAreaDetailPage(area_name) {
    console.log("성공 ");
    areaName = area_name.value;
    console.log(areaName);
    location.href = "clickAreaDetail.html";
};

