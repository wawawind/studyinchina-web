// 1. ฐานข้อมูลมหาลัย (เพิ่มเมืองได้เรื่อยๆ ตรงนี้)
const universityData = {
  beijing: {
    city: "ปักกิ่ง (Beijing)",
    details: "เมืองหลวงของจีน ศูนย์รวมการศึกษาชั้นนำ",
    universities: [
      "Peking University (อันดับ 1)",
      "Tsinghua University (เด่นวิศวะ)",
      "Beijing Normal University (เด่นครู/ภาษา)",
    ],
  },
  shanghai: {
    city: "เซี่ยงไฮ้ (Shanghai)",
    details: "มหานครทันสมัย ศูนย์กลางเศรษฐกิจโลก",
    universities: [
      "Fudan University",
      "Shanghai Jiao Tong University",
      "Tongji University",
    ],
  },
  chengdu: {
    city: "เฉิงตู (Chengdu)",
    details: "เมืองแห่งแพนด้า อาหารอร่อย ค่าครองชีพไม่แพง",
    universities: ["Sichuan University", "Southwestern University of Finance"],
  },
  // อยากเพิ่มเมืองอื่น ก๊อปปี้บล็อกข้างบนมาวางต่อได้เลย
};

// 2. ฟังก์ชันทำงานเมื่อกดปุ่ม
function showInfo(cityKey) {
  // ดึงข้อมูลจากฐานข้อมูลด้านบน
  const data = universityData[cityKey];

  // ถ้าไม่มีข้อมูลให้หยุดทำงาน
  if (!data) return;

  // เปลี่ยนข้อความในหน้าเว็บ
  document.getElementById("uni-name").innerText = data.city;
  document.getElementById("uni-details").innerHTML = `
        <p>${data.details}</p>
        <strong>มหาวิทยาลัยแนะนำ:</strong>
        <ul>
            ${data.universities.map((uni) => `<li>${uni}</li>`).join("")}
        </ul>
    `;

  // เปิดกล่องข้อมูลขึ้นมา (ลบ attribute hidden ออก)
  document.getElementById("info-panel").removeAttribute("hidden");
}

// 3. ฟังก์ชันปิดกล่องข้อมูล
function closeInfo() {
  document.getElementById("info-panel").setAttribute("hidden", true);
}

// 4. เชื่อมต่อปุ่มกด (Event Listeners)
document.addEventListener("DOMContentLoaded", () => {
  // หาปุ่มหมุดทั้งหมดที่มี class="pin"
  const pins = document.querySelectorAll(".pin");

  pins.forEach((pin) => {
    pin.addEventListener("click", function () {
      // ดึงชื่อเมืองจาก attribute "data-city" ใน HTML
      const city = this.getAttribute("data-city");
      showInfo(city);
    });
  });
});
