// ========= Helpers =========
function showLayer(id){
  document.querySelectorAll(".layer").forEach(l => l.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  // background switching
  const collage = document.getElementById("collageBg");
  const darkBg = document.getElementById("darkBg");

  if(id === "layer-ask"){
    collage.style.display = "block";
    darkBg.style.display = "block";
  } else {
    collage.style.display = "none";
    darkBg.style.display = "block";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function buildCollage(){
  const container = document.getElementById("collageBg");

  const photos = [ 
    "assets/collage/1.jpg","assets/collage/2.jpg","assets/collage/3.jpg","assets/collage/4.jpg",
    "assets/collage/5.jpg","assets/collage/6.jpg","assets/collage/7.jpg","assets/collage/8.jpg",
    "assets/collage/9.jpg","assets/collage/10.jpg","assets/collage/11.jpg","assets/collage/12.jpg",
    "assets/collage/13.jpg","assets/collage/14.jpg","assets/collage/15.jpg","assets/collage/16.jpg",
    "assets/collage/17.jpg","assets/collage/18.jpg","assets/collage/19.jpg","assets/collage/20.jpg",
    "assets/collage/21.jpg","assets/collage/22.jpg","assets/collage/23.jpg","assets/collage/24.jpg",
    "assets/collage/25.jpg","assets/collage/26.jpg","assets/collage/27.jpg","assets/collage/28.jpg",
    "assets/collage/29.jpg","assets/collage/30.jpg","assets/collage/31.jpeg","assets/collage/32.jpeg",
    "assets/collage/33.jpeg","assets/collage/34.jpeg","assets/collage/35.jpeg","assets/collage/36.jpeg",
    "assets/collage/37.jpeg","assets/collage/38.jpeg","assets/collage/39.jpeg","assets/collage/40.jpeg",
    "assets/collage/41.jpg","assets/collage/42.jpg","assets/collage/43.jpg","assets/collage/44.jpg",
    "assets/collage/45.PNG","assets/collage/46.PNG","assets/collage/47.PNG","assets/collage/48.PNG",
    "assets/collage/49.jpg","assets/collage/50.jpg","assets/collage/51.jpg","assets/collage/52.jpg",
    "assets/collage/53.PNG","assets/collage/54.PNG","assets/collage/55.PNG","assets/collage/56.PNG",
    "assets/collage/57.PNG","assets/collage/58.PNG","assets/collage/59.PNG","assets/collage/60.PNG",
    "assets/collage/61.PNG","assets/collage/62.PNG","assets/collage/63.PNG","assets/collage/64.PNG",
    "assets/collage/65.jpeg","assets/collage/66.jpeg","assets/collage/67.jpeg","assets/collage/68.jpg",
    "assets/collage/69.PNG","assets/collage/70.PNG","assets/collage/71.PNG","assets/collage/72.PNG",
    "assets/collage/73.jpg","assets/collage/74.jpg","assets/collage/75.jpg","assets/collage/76.jpg",
    "assets/collage/77.jpg","assets/collage/78.jpg","assets/collage/79.jpg","assets/collage/80.jpg",
    "assets/collage/81.jpg","assets/collage/82.jpg","assets/collage/83.jpg","assets/collage/84.jpg",
    "assets/collage/85.jpg","assets/collage/86.jpg","assets/collage/87.jpg","assets/collage/88.jpg",
    "assets/collage/89.jpg","assets/collage/90.jpg","assets/collage/91.jpg","assets/collage/92.jpg",
    "assets/collage/93.jpg","assets/collage/94.jpg","assets/collage/95.jpg","assets/collage/96.jpg",
    "assets/collage/97.jpg","assets/collage/98.PNG","assets/collage/99.PNG","assets/collage/100.PNG",
    "assets/collage/101.PNG","assets/collage/102.PNG","assets/collage/103.PNG","assets/collage/104.PNG",
    "assets/collage/105.PNG","assets/collage/106.PNG","assets/collage/107.PNG","assets/collage/108.PNG",
    "assets/collage/109.PNG","assets/collage/110.jpg","assets/collage/111.jpg","assets/collage/112.jpg",
    "assets/collage/113.jpg","assets/collage/114.jpg","assets/collage/115.jpg","assets/collage/116.jpg",
    "assets/collage/117.jpg","assets/collage/118.jpg","assets/collage/119.jpg","assets/collage/120.jpg",
    "assets/collage/121.jpg","assets/collage/122.jpg","assets/collage/123.jpg","assets/collage/124.jpg",
    "assets/collage/125.jpg","assets/collage/126.jpg","assets/collage/127.jpg","assets/collage/128.jpg",
    "assets/collage/129.jpg","assets/collage/130.jpg","assets/collage/131.PNG","assets/collage/132.PNG",
    "assets/collage/133.PNG","assets/collage/134.PNG","assets/collage/135.PNG","assets/collage/136.PNG",
    "assets/collage/137.PNG","assets/collage/138.PNG","assets/collage/139.jpg","assets/collage/140.PNG",
    "assets/collage/141.PNG","assets/collage/142.PNG","assets/collage/143.PNG","assets/collage/144.jpg",
    "assets/collage/145.PNG","assets/collage/146.jpg","assets/collage/147.PNG","assets/collage/148.PNG",
    "assets/collage/149.PNG","assets/collage/150.PNG","assets/collage/151.PNG","assets/collage/152.jpg",
    "assets/collage/153.jpg","assets/collage/154.jpg","assets/collage/155.jpg","assets/collage/156.jpg",
    "assets/collage/157.jpg","assets/collage/158.jpg","assets/collage/159.jpeg","assets/collage/160.jpg",
    "assets/collage/161.jpg","assets/collage/162.jpg","assets/collage/163.jpg","assets/collage/164.jpg",
    "assets/collage/165.jpg","assets/collage/166.jpg","assets/collage/167.jpg","assets/collage/168.jpg",
    "assets/collage/169.jpg","assets/collage/170.jpg","assets/collage/171.jpg","assets/collage/172.jpg",
    "assets/collage/173.jpg","assets/collage/174.jpg","assets/collage/175.jpeg","assets/collage/176.jpg",
    "assets/collage/177.jpg","assets/collage/178.jpg","assets/collage/179.jpg","assets/collage/180.jpg",
    "assets/collage/181.jpg","assets/collage/182.jpg","assets/collage/183.jpg","assets/collage/184.jpg",
    "assets/collage/185.jpg","assets/collage/186.jpg","assets/collage/187.jpg","assets/collage/188.jpg",
    "assets/collage/189.jpg","assets/collage/190.jpg","assets/collage/191.jpg","assets/collage/192.jpg",
    "assets/collage/193.jpg","assets/collage/194.jpg","assets/collage/195.PNG","assets/collage/196.PNG",
    "assets/collage/197.jpg","assets/collage/198.jpg","assets/collage/199.jpg","assets/collage/200.jpg",
    "assets/collage/201.jpg","assets/collage/202.PNG","assets/collage/203.PNG","assets/collage/204.PNG",
    "assets/collage/205.PNG","assets/collage/206.jpg","assets/collage/207.jpg","assets/collage/208.jpg",
    "assets/collage/209.jpg","assets/collage/210.jpg","assets/collage/211.jpg","assets/collage/212.jpg",
    "assets/collage/213.jpg","assets/collage/214.jpg","assets/collage/215.jpg","assets/collage/216.jpg",
    "assets/collage/217.jpg","assets/collage/218.jpg","assets/collage/219.jpg","assets/collage/220.jpg",  
    "assets/collage/221.jpg","assets/collage/222.jpg","assets/collage/223.jpg","assets/collage/224.jpg",
    "assets/collage/225.jpg","assets/collage/226.jpg","assets/collage/227.jpg","assets/collage/228.jpg",
    "assets/collage/229.jpg","assets/collage/230.jpg","assets/collage/231.jpg","assets/collage/232.jpg",
    "assets/collage/233.jpg","assets/collage/234.jpg","assets/collage/235.jpg","assets/collage/236.jpg",
    "assets/collage/237.jpg","assets/collage/238.jpg","assets/collage/239.jpg","assets/collage/240.jpg",
    "assets/collage/241.jpg","assets/collage/242.jpg","assets/collage/243.jpg","assets/collage/244.jpg",
    "assets/collage/245.jpg","assets/collage/246.jpg","assets/collage/247.jpg","assets/collage/248.jpg",
    "assets/collage/249.jpg","assets/collage/250.PNG","assets/collage/251.PNG","assets/collage/252.PNG",
    "assets/collage/253.PNG","assets/collage/254.jpg","assets/collage/255.jpg","assets/collage/256.jpg",
    "assets/collage/257.jpg","assets/collage/258.jpg","assets/collage/259.jpg","assets/collage/260.PNG",
    "assets/collage/261.PNG","assets/collage/262.PNG","assets/collage/263.PNG","assets/collage/264.PNG",
    "assets/collage/265.PNG","assets/collage/266.jpg","assets/collage/267.jpg","assets/collage/268.jpg",
    "assets/collage/269.jpg","assets/collage/270.jpg","assets/collage/271.jpg","assets/collage/272.jpg",
    "assets/collage/273.jpg","assets/collage/274.jpg","assets/collage/275.jpg","assets/collage/276.jpg",
    "assets/collage/277.jpg","assets/collage/278.jpg","assets/collage/279.jpg","assets/collage/280.jpg",
    "assets/collage/281.jpg","assets/collage/282.jpg","assets/collage/283.jpg","assets/collage/284.jpg",
    "assets/collage/285.jpg","assets/collage/286.jpg","assets/collage/287.jpg","assets/collage/288.jpg",
    "assets/collage/289.jpg","assets/collage/290.jpg","assets/collage/291.jpg","assets/collage/292.jpg",
    "assets/collage/293.jpg","assets/collage/294.jpg","assets/collage/295.jpg","assets/collage/296.jpg",
    "assets/collage/297.jpg","assets/collage/298.jpg","assets/collage/299.jpg","assets/collage/300.jpg",
    "assets/collage/301.jpg","assets/collage/302.jpg","assets/collage/303.jpg","assets/collage/304.jpg",
    "assets/collage/305.jpg","assets/collage/306.jpg","assets/collage/307.jpg","assets/collage/308.jpg",
    "assets/collage/309.jpg","assets/collage/310.jpg","assets/collage/311.jpg","assets/collage/312.jpg",
    "assets/collage/313.jpg","assets/collage/314.jpg","assets/collage/315.jpg","assets/collage/316.jpg",
    "assets/collage/317.jpg","assets/collage/318.jpg","assets/collage/319.jpg","assets/collage/320.jpg",
    "assets/collage/321.jpg","assets/collage/322.jpg","assets/collage/323.jpg","assets/collage/324.jpg",
    "assets/collage/325.jpg","assets/collage/326.jpg","assets/collage/327.jpg","assets/collage/328.jpg",
    "assets/collage/329.jpg","assets/collage/330.jpg","assets/collage/331.jpg","assets/collage/332.jpg",
    "assets/collage/333.jpg","assets/collage/334.jpg","assets/collage/335.jpg","assets/collage/336.jpg",
    "assets/collage/337.jpg","assets/collage/338.jpg","assets/collage/339.jpg","assets/collage/340.jpg",
    "assets/collage/341.jpg","assets/collage/342.jpg","assets/collage/343.jpg","assets/collage/344.jpg",
    "assets/collage/345.jpg","assets/collage/346.jpg","assets/collage/347.jpg","assets/collage/348.jpg",
    "assets/collage/349.jpg","assets/collage/350.jpg","assets/collage/351.jpg","assets/collage/352.jpg",
    "assets/collage/353.jpg","assets/collage/354.jpg","assets/collage/355.jpg","assets/collage/356.jpg",
    "assets/collage/357.jpg","assets/collage/358.jpg","assets/collage/359.jpg","assets/collage/360.jpg",
    "assets/collage/361.jpg","assets/collage/362.jpg","assets/collage/363.jpg","assets/collage/364.jpg",
    "assets/collage/365.jpg","assets/collage/366.jpg","assets/collage/367.jpg","assets/collage/368.jpg",
    "assets/collage/369.jpg","assets/collage/370.jpg","assets/collage/371.jpg","assets/collage/372.jpg",
    "assets/collage/373.jpg","assets/collage/374.jpg","assets/collage/375.jpg","assets/collage/376.jpg",
    "assets/collage/377.jpg","assets/collage/378.jpg","assets/collage/379.jpg","assets/collage/380.jpg",
    "assets/collage/381.jpg","assets/collage/382.jpg","assets/collage/383.jpg","assets/collage/384.jpg",
    "assets/collage/385.jpg","assets/collage/386.jpg","assets/collage/387.jpg","assets/collage/388.jpg",
    "assets/collage/389.jpg","assets/collage/390.jpg","assets/collage/391.jpg","assets/collage/392.jpg",
    "assets/collage/393.jpg","assets/collage/394.jpg","assets/collage/395.jpg","assets/collage/396.jpg",
    "assets/collage/397.jpg","assets/collage/398.jpg","assets/collage/399.jpg","assets/collage/400.jpg",
    "assets/collage/401.jpg","assets/collage/402.jpg","assets/collage/403.jpg","assets/collage/404.jpg",
    "assets/collage/405.jpg","assets/collage/406.jpg","assets/collage/407.jpg","assets/collage/408.jpg",
    "assets/collage/409.jpg","assets/collage/410.jpg","assets/collage/411.jpg","assets/collage/412.jpg",
    "assets/collage/413.jpg","assets/collage/414.PNG","assets/collage/415.PNG","assets/collage/416.jpg",
    "assets/collage/417.jpg","assets/collage/418.jpg","assets/collage/419.jpg","assets/collage/420.PNG",
    "assets/collage/421.PNG","assets/collage/422.jpg","assets/collage/423.jpg","assets/collage/424.jpg",
    "assets/collage/425.jpg","assets/collage/426.jpg","assets/collage/427.jpeg","assets/collage/428.jpg",
    "assets/collage/429.jpeg","assets/collage/430.jpeg","assets/collage/431.jpg","assets/collage/432.jpeg",
    "assets/collage/433.jpeg","assets/collage/434.jpeg","assets/collage/435.jpeg","assets/collage/436.jpg",
    "assets/collage/437.jpg","assets/collage/438.jpg","assets/collage/439.jpg","assets/collage/440.jpg",
    "assets/collage/441.jpg","assets/collage/442.jpg","assets/collage/443.jpg","assets/collage/444.jpg",
    "assets/collage/445.jpg","assets/collage/446.jpg","assets/collage/447.jpg","assets/collage/448.jpg",
    "assets/collage/449.jpg","assets/collage/450.jpg","assets/collage/451.jpg","assets/collage/452.jpg",
    "assets/collage/453.jpg","assets/collage/454.jpg","assets/collage/455.jpg","assets/collage/456.jpg",
    "assets/collage/457.jpg","assets/collage/458.jpg","assets/collage/459.jpg","assets/collage/460.jpg",
    "assets/collage/461.jpg","assets/collage/462.jpg","assets/collage/463.jpg","assets/collage/464.jpg",
    "assets/collage/465.jpg","assets/collage/466.jpg","assets/collage/467.jpg","assets/collage/468.jpg",
    "assets/collage/469.jpg","assets/collage/470.jpg","assets/collage/471.jpg","assets/collage/472.jpg",
    "assets/collage/473.jpg","assets/collage/474.jpg","assets/collage/475.jpg","assets/collage/476.jpg",
    "assets/collage/477.jpg","assets/collage/478.jpg","assets/collage/479.jpg","assets/collage/480.jpg",
    "assets/collage/481.jpg","assets/collage/482.jpg","assets/collage/483.jpg","assets/collage/484.jpg",
    "assets/collage/485.jpg","assets/collage/486.jpg","assets/collage/487.jpg","assets/collage/488.jpg",
    "assets/collage/489.jpg","assets/collage/490.jpg","assets/collage/491.jpg","assets/collage/492.jpg",
    "assets/collage/493.jpg","assets/collage/494.jpg","assets/collage/495.jpg","assets/collage/496.jpg",
    "assets/collage/497.jpg","assets/collage/498.jpg","assets/collage/499.jpg","assets/collage/500.jpg",
    "assets/collage/501.jpg","assets/collage/502.jpg","assets/collage/503.jpg","assets/collage/504.jpg",
    "assets/collage/505.jpg","assets/collage/506.jpg","assets/collage/507.jpg","assets/collage/508.jpg",
    "assets/collage/509.jpg","assets/collage/510.jpg","assets/collage/511.jpg","assets/collage/512.jpg",
    "assets/collage/513.jpg","assets/collage/514.jpg","assets/collage/515.jpg","assets/collage/516.jpg",
    "assets/collage/517.jpg","assets/collage/518.jpg","assets/collage/519.jpg","assets/collage/520.jpg",
    "assets/collage/521.jpg","assets/collage/522.jpg","assets/collage/523.jpg","assets/collage/524.jpg",
    "assets/collage/525.jpg","assets/collage/526.jpg","assets/collage/527.jpg","assets/collage/528.jpg",
    "assets/collage/529.jpg","assets/collage/530.jpg","assets/collage/531.jpg","assets/collage/532.jpg",
    "assets/collage/533.jpg","assets/collage/534.jpg","assets/collage/535.jpg","assets/collage/536.jpg",
    "assets/collage/537.jpg","assets/collage/538.jpg","assets/collage/539.jpg","assets/collage/540.jpg",
    "assets/collage/541.jpg","assets/collage/542.jpg","assets/collage/543.jpg","assets/collage/544.jpg",
    "assets/collage/545.jpg","assets/collage/546.jpg","assets/collage/547.jpg","assets/collage/548.jpg",
    "assets/collage/549.jpg","assets/collage/550.jpg","assets/collage/551.jpg","assets/collage/552.jpg",
    "assets/collage/553.jpg","assets/collage/554.jpg","assets/collage/555.jpg","assets/collage/556.jpg",
    "assets/collage/557.jpg","assets/collage/558.jpg","assets/collage/559.jpg","assets/collage/560.jpg",
    "assets/collage/561.jpg","assets/collage/562.jpg","assets/collage/563.jpg","assets/collage/564.jpg",
    "assets/collage/565.jpg","assets/collage/566.jpg","assets/collage/567.jpg","assets/collage/568.jpg",
    "assets/collage/569.jpg","assets/collage/570.jpg","assets/collage/571.jpg","assets/collage/572.jpg",
    "assets/collage/573.jpg","assets/collage/574.jpg","assets/collage/575.jpg","assets/collage/576.jpg",
    "assets/collage/577.jpg","assets/collage/578.jpg","assets/collage/579.jpg","assets/collage/580.jpg",
    "assets/collage/581.jpg","assets/collage/582.jpg","assets/collage/583.jpg","assets/collage/584.jpg",
    "assets/collage/585.jpg","assets/collage/586.jpg","assets/collage/587.jpg","assets/collage/588.jpg",
    "assets/collage/589.jpg","assets/collage/590.jpg","assets/collage/591.jpg","assets/collage/592.jpg",
    "assets/collage/593.jpg","assets/collage/594.jpg","assets/collage/595.jpg","assets/collage/596.jpg",
    "assets/collage/597.jpg","assets/collage/598.jpg","assets/collage/599.jpg","assets/collage/600.jpg",
    "assets/collage/601.jpg","assets/collage/602.jpg","assets/collage/603.jpg","assets/collage/604.jpg",
    "assets/collage/605.jpg","assets/collage/606.jpg","assets/collage/607.jpeg","assets/collage/608.jpeg",
    "assets/collage/609.jpeg","assets/collage/610.jpeg","assets/collage/611.jpeg","assets/collage/612.jpeg",
    "assets/collage/613.jpeg","assets/collage/614.jpeg","assets/collage/615.jpeg","assets/collage/616.jpeg",
    "assets/collage/617.jpeg","assets/collage/618.jpeg","assets/collage/619.jpeg","assets/collage/620.jpeg",
    "assets/collage/621.jpeg","assets/collage/622.jpeg","assets/collage/623.jpeg","assets/collage/624.jpeg",
    "assets/collage/625.jpeg","assets/collage/626.jpeg","assets/collage/627.jpeg","assets/collage/628.jpeg",
    "assets/collage/629.jpeg","assets/collage/630.jpg","assets/collage/631.jpg","assets/collage/632.jpg",
    "assets/collage/633.jpg","assets/collage/634.jpg","assets/collage/635.jpg","assets/collage/636.jpg",
    "assets/collage/637.jpg","assets/collage/638.jpg","assets/collage/639.jpg","assets/collage/640.jpg",
    "assets/collage/641.jpg","assets/collage/642.jpg","assets/collage/643.jpg","assets/collage/644.jpg",
    "assets/collage/645.jpg","assets/collage/646.jpg","assets/collage/647.jpg","assets/collage/648.jpg",
    "assets/collage/649.jpg","assets/collage/650.jpg","assets/collage/651.jpg","assets/collage/652.jpg",
    "assets/collage/653.jpg","assets/collage/654.jpg","assets/collage/655.jpg","assets/collage/656.jpg",
    "assets/collage/657.jpg","assets/collage/658.jpg","assets/collage/659.jpg","assets/collage/660.jpg",
    "assets/collage/661.jpg","assets/collage/662.jpg","assets/collage/663.jpg","assets/collage/664.jpg",
    "assets/collage/665.jpg","assets/collage/666.jpg","assets/collage/667.jpg","assets/collage/668.jpg",
    "assets/collage/669.jpg","assets/collage/670.jpg","assets/collage/671.jpg","assets/collage/672.jpg",
    "assets/collage/673.jpg","assets/collage/674.jpg","assets/collage/675.jpg","assets/collage/676.jpg",
    "assets/collage/677.jpg","assets/collage/678.jpg","assets/collage/679.jpg","assets/collage/680.jpg",
    "assets/collage/681.jpg","assets/collage/682.jpg","assets/collage/683.jpg","assets/collage/684.jpg",
    "assets/collage/685.jpg","assets/collage/686.jpg","assets/collage/687.jpg","assets/collage/688.jpg",
    "assets/collage/689.jpg","assets/collage/690.jpg","assets/collage/691.jpg","assets/collage/692.jpg",
    "assets/collage/693.jpg","assets/collage/694.jpg","assets/collage/695.jpg","assets/collage/696.jpg",
    "assets/collage/697.jpg","assets/collage/698.jpg","assets/collage/699.jpg","assets/collage/700.jpg",
    "assets/collage/701.jpg","assets/collage/702.jpg","assets/collage/703.jpg","assets/collage/704.jpg",
    "assets/collage/705.jpg","assets/collage/706.jpg","assets/collage/707.jpg","assets/collage/708.jpg",
    "assets/collage/709.jpg","assets/collage/710.jpg","assets/collage/711.jpg","assets/collage/712.jpg",
    "assets/collage/713.jpg","assets/collage/714.jpg","assets/collage/715.jpg","assets/collage/716.jpg",
    "assets/collage/717.jpg","assets/collage/718.jpg","assets/collage/719.jpg","assets/collage/720.jpg",
    "assets/collage/721.jpg","assets/collage/722.jpg","assets/collage/723.jpg","assets/collage/724.jpg",
    "assets/collage/725.jpg","assets/collage/726.jpg","assets/collage/727.jpg","assets/collage/728.jpg",
    "assets/collage/729.jpg","assets/collage/730.jpg","assets/collage/731.jpg","assets/collage/732.jpg",
    "assets/collage/733.jpg","assets/collage/734.jpg","assets/collage/735.jpg","assets/collage/736.jpg",
    "assets/collage/737.jpg","assets/collage/738.jpg","assets/collage/739.jpg","assets/collage/740.jpg",
    "assets/collage/741.jpg","assets/collage/742.jpg","assets/collage/743.jpg","assets/collage/744.jpg",
    "assets/collage/745.jpg","assets/collage/746.jpg","assets/collage/747.jpg","assets/collage/748.jpg",
    "assets/collage/749.jpg","assets/collage/750.jpg","assets/collage/751.jpg","assets/collage/752.jpg",
    "assets/collage/753.jpg","assets/collage/754.jpg","assets/collage/755.jpg","assets/collage/756.jpg",
    "assets/collage/757.jpg","assets/collage/758.jpg","assets/collage/759.jpg","assets/collage/760.jpg",
    "assets/collage/761.jpg","assets/collage/762.jpg","assets/collage/763.jpg","assets/collage/764.jpg",
    "assets/collage/765.jpg","assets/collage/766.jpg","assets/collage/767.jpg","assets/collage/768.jpg",
    "assets/collage/769.jpg","assets/collage/770.jpg","assets/collage/771.jpg","assets/collage/772.jpg",
    "assets/collage/773.jpg","assets/collage/774.jpg","assets/collage/775.jpg","assets/collage/776.jpg",
    "assets/collage/777.jpg","assets/collage/778.jpg","assets/collage/779.jpg","assets/collage/780.jpg",
    "assets/collage/781.jpg","assets/collage/782.jpg","assets/collage/783.jpg","assets/collage/784.jpg",
    "assets/collage/785.jpg","assets/collage/786.jpg","assets/collage/787.jpg","assets/collage/788.jpg",
    "assets/collage/789.jpg","assets/collage/790.jpg","assets/collage/791.jpg","assets/collage/792.jpg",
    "assets/collage/793.jpg","assets/collage/794.jpg","assets/collage/795.jpg","assets/collage/796.jpg",
    "assets/collage/797.jpg","assets/collage/798.jpg","assets/collage/799.jpg","assets/collage/800.jpg",
    "assets/collage/801.jpg","assets/collage/802.jpg","assets/collage/803.jpg","assets/collage/804.jpg",
    "assets/collage/805.jpg","assets/collage/806.jpg","assets/collage/807.jpg","assets/collage/808.jpg",
    "assets/collage/809.jpg","assets/collage/810.jpg","assets/collage/811.jpg","assets/collage/812.jpg",
    "assets/collage/813.jpg","assets/collage/814.jpg","assets/collage/815.jpg","assets/collage/816.jpg",
    "assets/collage/817.jpg","assets/collage/818.jpg","assets/collage/819.jpg","assets/collage/820.jpg",
    "assets/collage/821.jpg","assets/collage/822.jpg","assets/collage/823.jpg","assets/collage/824.jpg",
    "assets/collage/825.jpg","assets/collage/826.jpg","assets/collage/827.jpg","assets/collage/828.jpg",
    "assets/collage/829.jpg","assets/collage/830.jpg","assets/collage/831.jpg","assets/collage/832.jpg",
    "assets/collage/833.jpg","assets/collage/834.jpg","assets/collage/835.jpg","assets/collage/836.jpg",
    "assets/collage/837.jpg","assets/collage/838.jpg","assets/collage/839.jpg","assets/collage/840.jpg",
    "assets/collage/841.jpg","assets/collage/842.jpg","assets/collage/843.jpg","assets/collage/844.jpg",
    "assets/collage/845.jpg","assets/collage/846.jpg","assets/collage/847.jpg","assets/collage/848.jpg",
    "assets/collage/849.jpg","assets/collage/850.jpg","assets/collage/851.jpg","assets/collage/852.jpg",
    "assets/collage/853.jpg","assets/collage/854.jpg","assets/collage/855.jpg","assets/collage/856.jpg",
    "assets/collage/857.jpg","assets/collage/858.jpg","assets/collage/859.jpg","assets/collage/860.jpg",
    "assets/collage/861.jpg","assets/collage/862.jpg","assets/collage/863.jpg","assets/collage/864.jpg",
    "assets/collage/865.jpg","assets/collage/866.jpg","assets/collage/867.jpg","assets/collage/868.jpg",
    "assets/collage/869.jpg","assets/collage/870.jpg","assets/collage/871.jpg","assets/collage/872.jpg",
    "assets/collage/873.jpg","assets/collage/874.jpg","assets/collage/875.jpg","assets/collage/876.PNG",
    "assets/collage/877.jpg","assets/collage/878.PNG","assets/collage/879.PNG","assets/collage/880.PNG",
    "assets/collage/881.PNG","assets/collage/882.PNG","assets/collage/883.PNG","assets/collage/884.PNG",
    "assets/collage/885.jpeg","assets/collage/886.jpg","assets/collage/887.jpg","assets/collage/888.jpg",
    "assets/collage/889.jpg","assets/collage/890.jpg","assets/collage/891.jpg","assets/collage/892.jpg",
    "assets/collage/893.jpg","assets/collage/894.jpg","assets/collage/895.jpg","assets/collage/896.jpg",
    "assets/collage/897.jpg","assets/collage/898.jpg","assets/collage/899.jpg","assets/collage/900.jpg",
    "assets/collage/901.jpg","assets/collage/902.jpg","assets/collage/903.jpg","assets/collage/904.jpg",
    "assets/collage/905.jpg","assets/collage/906.jpg","assets/collage/907.jpg","assets/collage/908.jpg",
    "assets/collage/909.PNG","assets/collage/910.PNG","assets/collage/911.PNG","assets/collage/912.PNG",
    "assets/collage/913.PNG","assets/collage/914.jpeg","assets/collage/915.jpeg","assets/collage/916.jpeg",
    "assets/collage/917.jpeg","assets/collage/918.jpeg","assets/collage/919.jpeg","assets/collage/920.jpeg",
    "assets/collage/921.jpeg","assets/collage/922.jpeg","assets/collage/923.jpeg","assets/collage/924.jpeg",
    "assets/collage/925.jpeg","assets/collage/926.jpeg","assets/collage/927.jpeg","assets/collage/928.jpeg",
    "assets/collage/929.jpeg","assets/collage/930.jpeg","assets/collage/931.PNG","assets/collage/932.PNG",
    "assets/collage/933.jpeg","assets/collage/934.jpeg","assets/collage/935.jpeg","assets/collage/936.jpeg",
    "assets/collage/937.jpeg","assets/collage/938.jpeg","assets/collage/939.jpeg","assets/collage/940.jpeg",
    "assets/collage/941.jpeg","assets/collage/942.jpeg","assets/collage/943.jpeg","assets/collage/944.jpeg",
    "assets/collage/945.jpeg","assets/collage/946.jpeg","assets/collage/947.jpeg","assets/collage/948.jpeg",
    "assets/collage/949.jpeg","assets/collage/950.jpeg","assets/collage/951.jpeg","assets/collage/952.jpeg",
    "assets/collage/953.jpeg","assets/collage/954.jpeg","assets/collage/955.jpeg","assets/collage/956.jpeg",
    "assets/collage/957.jpeg","assets/collage/958.jpeg","assets/collage/959.jpeg","assets/collage/960.jpeg",
    "assets/collage/961.jpeg","assets/collage/962.PNG","assets/collage/963.jpeg","assets/collage/964.jpeg",
    "assets/collage/965.jpeg","assets/collage/966.jpeg","assets/collage/967.jpeg","assets/collage/968.jpeg",
    "assets/collage/969.jpg","assets/collage/970.jpg","assets/collage/971.jpg","assets/collage/972.jpg",
    "assets/collage/973.jpg","assets/collage/974.jpg","assets/collage/975.jpg","assets/collage/976.jpg",
    "assets/collage/977.jpg","assets/collage/978.jpeg","assets/collage/979.jpg","assets/collage/980.jpeg",
    "assets/collage/981.jpg","assets/collage/982.jpg","assets/collage/983.jpeg","assets/collage/984.jpg",
    "assets/collage/985.jpeg","assets/collage/986.jpg","assets/collage/987.jpeg","assets/collage/988.jpg",
    "assets/collage/989.jpeg","assets/collage/990.jpg","assets/collage/991.jpg","assets/collage/992.jpg",
    "assets/collage/993.jpg","assets/collage/994.jpg","assets/collage/995.jpg","assets/collage/996.jpg",
    "assets/collage/997.jpg","assets/collage/998.jpg","assets/collage/999.jpg","assets/collage/1000.jpg",
    "assets/collage/1001.jpg","assets/collage/1002.jpg","assets/collage/1003.jpg","assets/collage/1004.jpg",
    "assets/collage/1005.jpg","assets/collage/1006.jpg","assets/collage/1007.jpg","assets/collage/1008.jpg",
    "assets/collage/1009.jpg","assets/collage/1010.jpg","assets/collage/1011.jpg","assets/collage/1012.jpg",
    "assets/collage/1013.jpg","assets/collage/1014.jpg","assets/collage/1015.jpg","assets/collage/1016.jpg",
    "assets/collage/1017.jpg","assets/collage/1018.jpg","assets/collage/1019.jpg","assets/collage/1020.jpg",
    "assets/collage/1021.jpg","assets/collage/1022.jpg","assets/collage/1023.jpg","assets/collage/1024.jpg",
    "assets/collage/1025.jpg","assets/collage/1026.jpg","assets/collage/1027.jpg","assets/collage/1028.jpg",
    "assets/collage/1029.jpg","assets/collage/1030.jpg","assets/collage/1031.jpg","assets/collage/1032.jpg",
    "assets/collage/1033.jpg","assets/collage/1034.jpg","assets/collage/1035.jpg","assets/collage/1036.jpg",
    "assets/collage/1037.jpg","assets/collage/1038.jpg","assets/collage/1039.jpg","assets/collage/1040.jpg",
    "assets/collage/1041.jpg","assets/collage/1042.jpg","assets/collage/1043.jpg","assets/collage/1044.jpg",
    "assets/collage/1045.jpg","assets/collage/1046.jpg","assets/collage/1047.jpg","assets/collage/1048.jpg",
    "assets/collage/1049.jpg","assets/collage/1050.jpg","assets/collage/1051.jpg","assets/collage/1052.jpg",
    "assets/collage/1053.jpg","assets/collage/1054.jpg","assets/collage/1055.jpg","assets/collage/1056.jpg",
    "assets/collage/1057.jpg","assets/collage/1058.PNG","assets/collage/1059.PNG","assets/collage/1060.PNG",
    "assets/collage/1061.PNG","assets/collage/1062.PNG","assets/collage/1063.jpeg","assets/collage/1064.jpeg",
    "assets/collage/1065.jpeg","assets/collage/1066.jpeg","assets/collage/1067.jpeg","assets/collage/1068.jpeg",
    "assets/collage/1069.jpeg","assets/collage/1070.jpeg","assets/collage/1071.jpeg","assets/collage/1072.jpeg",
    "assets/collage/1073.jpeg","assets/collage/1074.jpeg","assets/collage/1075.jpeg","assets/collage/1076.jpeg",
    "assets/collage/1077.jpeg","assets/collage/1078.jpeg","assets/collage/1079.jpeg","assets/collage/1080.jpeg",
    "assets/collage/1081.jpeg","assets/collage/1082.jpeg","assets/collage/1083.jpeg","assets/collage/1084.jpeg",
    "assets/collage/1085.jpeg","assets/collage/1086.jpeg","assets/collage/1087.jpeg","assets/collage/1088.jpeg",
    "assets/collage/1089.jpeg","assets/collage/1090.jpeg","assets/collage/1091.jpeg","assets/collage/1092.jpeg",
    "assets/collage/1093.jpeg","assets/collage/1094.jpeg","assets/collage/1095.jpeg","assets/collage/1096.jpeg",
    "assets/collage/1097.jpeg","assets/collage/1098.jpeg","assets/collage/1099.jpeg","assets/collage/1100.jpeg",
    "assets/collage/1101.jpeg","assets/collage/1102.jpeg","assets/collage/1103.jpeg","assets/collage/1104.jpeg",
    "assets/collage/1105.jpeg","assets/collage/1106.jpeg","assets/collage/1107.jpeg","assets/collage/1108.jpeg",
    "assets/collage/1109.jpeg","assets/collage/1110.jpeg","assets/collage/1111.jpeg","assets/collage/1112.jpeg",
    "assets/collage/1113.jpeg","assets/collage/1114.jpeg","assets/collage/1115.jpeg","assets/collage/1116.jpeg",
    "assets/collage/1117.jpeg","assets/collage/1118.jpeg","assets/collage/1119.jpeg","assets/collage/1120.jpeg",
    "assets/collage/1121.jpeg","assets/collage/1122.jpeg","assets/collage/1123.jpeg","assets/collage/1124.jpeg",
    "assets/collage/1125.jpeg","assets/collage/1126.jpeg","assets/collage/1127.jpeg","assets/collage/1128.jpeg",
    "assets/collage/1129.jpeg","assets/collage/1130.jpeg","assets/collage/1131.jpeg","assets/collage/1132.jpeg",
    "assets/collage/1133.jpeg","assets/collage/1134.jpeg","assets/collage/1135.jpeg","assets/collage/1136.jpeg",
    "assets/collage/1137.jpeg","assets/collage/1138.jpeg","assets/collage/1139.jpeg","assets/collage/1140.jpeg",
    "assets/collage/1141.jpeg","assets/collage/1142.jpeg","assets/collage/1143.jpeg","assets/collage/1144.jpeg",
    "assets/collage/1145.jpeg","assets/collage/1146.jpeg","assets/collage/1147.jpeg","assets/collage/1148.jpeg",
    "assets/collage/1149.jpeg","assets/collage/1150.jpeg","assets/collage/1151.jpeg","assets/collage/1152.jpeg",
    "assets/collage/1153.jpeg","assets/collage/1154.jpeg","assets/collage/1155.jpeg","assets/collage/1156.jpeg",
    "assets/collage/1157.jpeg","assets/collage/1158.jpeg","assets/collage/1159.jpeg","assets/collage/1160.jpeg",
    "assets/collage/1161.jpg","assets/collage/1162.jpg","assets/collage/1163.jpg","assets/collage/1164.jpg",
    "assets/collage/1165.jpg","assets/collage/1166.jpg","assets/collage/1167.jpg","assets/collage/1168.jpg",
    "assets/collage/1169.jpg","assets/collage/1170.jpg","assets/collage/1171.jpg","assets/collage/1172.jpg",
    "assets/collage/1173.jpg","assets/collage/1174.jpg","assets/collage/1175.jpg","assets/collage/1176.jpg",
    "assets/collage/1177.jpg","assets/collage/1178.jpg","assets/collage/1179.jpg","assets/collage/1180.jpg",
    "assets/collage/1181.jpg","assets/collage/1182.jpg","assets/collage/1183.jpg","assets/collage/1184.jpg",
    "assets/collage/1185.jpg","assets/collage/1186.jpg","assets/collage/1187.jpg",
  ];

  container.innerHTML = "";
  container.style.display = "block";
  container.style.background = "#000";

  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gap = "2px";
  grid.style.height = "100%";
  grid.style.width = "100%";

  // Fit all images on one screen
  const total = photos.length;       // 1187
  const cols = 35;                   // tweak if you want smaller/bigger
  const rows = Math.ceil(total / cols);

  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  for (let i = 0; i < total; i++) {
    const tile = document.createElement("div");
    tile.style.background = "#111";
    tile.style.overflow = "hidden";
    tile.style.display = "flex";
    tile.style.alignItems = "center";
    tile.style.justifyContent = "center";

    const img = document.createElement("img");
    img.src = photos[i];
    img.alt = "";
    img.loading = "lazy";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "contain";
    img.style.background = "#111";

    tile.appendChild(img);
    grid.appendChild(tile);
  }

  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.inset = "0";
  overlay.style.background = "rgba(0,0,0,.35)";

  container.style.position = "fixed";
  container.style.inset = "0";
  container.style.zIndex = "-3";

  container.appendChild(grid);
  container.appendChild(overlay);
}

// ========= "No" button logic =========
let noClicks = 0;

function moveNoButton(btn){
  // Move within the visible viewport
  const padding = 14;
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  const rect = btn.getBoundingClientRect();
  const maxX = vw - rect.width - padding;
  const maxY = vh - rect.height - padding;

  const x = Math.floor(Math.random() * (maxX - padding + 1)) + padding;
  const y = Math.floor(Math.random() * (maxY - padding + 1)) + padding;

  btn.style.position = "fixed";
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
  btn.style.zIndex = "20";
}

function handleNoClick(){
  noClicks += 1;
  const btnNo = document.getElementById("btnNo");
  const hint = document.getElementById("noHint");

  moveNoButton(btnNo);

  if(noClicks === 2){
    hint.textContent = "Come on 😅";
  } else if(noClicks === 3){
    hint.textContent = "Stop playing 😤";
  } else if(noClicks >= 4){
    hint.textContent = "You are anyway saying yes ❤️";
    // Treat it like Yes after a tiny delay
    setTimeout(() => showLayer("layer-whyme"), 450);
  }
}

// ========= Hover video autoplay =========
function setupHoverVideos(){
  document.querySelectorAll(".flip-card").forEach(card => {
    const video = card.querySelector("video");
    if(!video) return;

    card.addEventListener("mouseenter", () => video.play().catch(()=>{}));
    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
}

// ========= Wire buttons =========
function wireButtons(){
  document.getElementById("btnYes").addEventListener("click", () => showLayer("layer-whyme"));
  document.getElementById("btnNo").addEventListener("click", handleNoClick);

  document.querySelectorAll("[data-next]").forEach(btn => {
    btn.addEventListener("click", () => showLayer(btn.getAttribute("data-next")));
  });

  document.getElementById("finishBtn").addEventListener("click", () => showLayer("layer-final"));
  document.getElementById("finalYes").addEventListener("click", () => showLayer("layer-final"));

  // Optional: quiz option click effect
  document.querySelectorAll(".quizOpt").forEach(b => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".quizOpt").forEach(x => x.style.opacity = "0.7");
      b.style.opacity = "1";
    });
  });
}

// ========= Start =========
buildCollage();
wireButtons();
setupHoverVideos();
showLayer("layer-ask");
