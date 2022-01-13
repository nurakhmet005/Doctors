let cards = document.querySelector(".specialities__cards");
let cardNames = [
  "Neurology",
  "Bones",
  "Oncology",
  "Otorhinolaryngology",
  "Ophthalmology",
  "Cardiovascular",
  "Pulmonology",
  "Renal Medicine",
  "Gastroenterology",
  "Urology",
  "Dermatology",
  "Gynaecology",
];

let currentRow = null;
for (let i = 0; i < cardNames.length; i++) {
  if (i % 4 == 0) {
    currentRow = document.createElement("div");
    currentRow.classList.add("specialities__cards-row");
    cards.appendChild(currentRow);
  }
  let card = document.createElement("div");
  card.classList.add("specialities__card");
  card.innerHTML = `<svg
  width="50"
  height="44"
  viewBox="0 0 50 44"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.45966 21.9877H7.50611L25.0122 39.5583L39.3888 25.1288H43.8142L25.0122 44L3.86308 22.7975C3.29258 22.2249 2.78729 21.6074 2.34719 20.9448C1.90709 20.2822 1.52404 19.5828 1.19804 18.8466H7.13936L14.0587 11.9264L25.0122 22.8957L32.8362 15.0675L36.6259 18.8466H45.3056C45.8272 18.0123 46.2266 17.1288 46.5037 16.1963C46.7808 15.2638 46.9193 14.3067 46.9193 13.3252C46.9193 11.9018 46.6544 10.5767 46.1247 9.34969C45.5949 8.1227 44.8696 7.05521 43.9487 6.14724C43.0277 5.23926 41.9519 4.52761 40.7213 4.01227C39.4906 3.49693 38.1663 3.23926 36.7482 3.23926C35.379 3.23926 34.1646 3.45603 33.1051 3.88957C32.0456 4.32311 31.0676 4.89162 30.1711 5.59509C29.2747 6.29857 28.4148 7.09611 27.5917 7.98773C26.7685 8.87934 25.9087 9.78323 25.0122 10.6994C24.132 9.81595 23.2763 8.92434 22.445 8.02454C21.6137 7.12474 20.7457 6.31493 19.8411 5.59509C18.9364 4.87526 17.9503 4.2863 16.8826 3.82822C15.815 3.37014 14.6129 3.1411 13.2763 3.1411C11.8745 3.1411 10.5583 3.40695 9.32763 3.93865C8.09698 4.47035 7.02119 5.19836 6.10024 6.1227C5.1793 7.04703 4.45395 8.12679 3.92421 9.36196C3.39446 10.5971 3.12958 11.9182 3.12958 13.3252C3.12958 14.0941 3.21923 14.8875 3.39853 15.7055H0.195599C0.114099 15.3129 0.0611247 14.9202 0.0366748 14.5276C0.0122249 14.135 0 13.7423 0 13.3497C0 11.501 0.346373 9.76687 1.03912 8.14724C1.73187 6.52761 2.67726 5.11247 3.87531 3.90184C5.07335 2.69121 6.47922 1.73824 8.09291 1.04294C9.7066 0.347648 11.4344 0 13.2763 0C14.6292 0 15.8354 0.155419 16.8949 0.466258C17.9544 0.777096 18.9364 1.20654 19.8411 1.7546C20.7457 2.30266 21.6096 2.96115 22.4328 3.73006C23.2559 4.49898 24.1157 5.34151 25.0122 6.25767C25.9087 5.34151 26.7685 4.49898 27.5917 3.73006C28.4148 2.96115 29.2787 2.30266 30.1834 1.7546C31.088 1.20654 32.0701 0.777096 33.1296 0.466258C34.1891 0.155419 35.3953 0 36.7482 0C38.5738 0 40.2934 0.347648 41.9071 1.04294C43.5208 1.73824 44.9267 2.68303 46.1247 3.8773C47.3227 5.07157 48.2681 6.47853 48.9609 8.09816C49.6536 9.71779 50 11.4438 50 13.2761C50 14.863 49.7229 16.4049 49.1687 17.9018C48.6145 19.3988 47.824 20.7607 46.7971 21.9877H35.3056L32.8362 19.4847L25.0122 27.362L14.0587 16.3436L8.45966 21.9877Z"
    fill="#159EEC"
    class="specialities__heart"
  />
</svg>
<p>${cardNames[i]}</p>`;
  currentRow.appendChild(card);
}
