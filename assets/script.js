const add_likes_btn = document.querySelectorAll(".add-likes");
const remove_likes_btn = document.querySelectorAll(".remove-likes");
const likes_view = document.querySelectorAll(".likes");
const delete_btn = document.getElementById("delete-btn");
const delete_modal = document.querySelector(".delete-modal");
const options = document.querySelectorAll(".option-delete");

delete_btn.onclick = () => {
  delete_modal.classList.add("active");
};

options.forEach((opt) => {
  opt.onclick = () => {
    delete_modal.classList.remove("active");
  };
});
