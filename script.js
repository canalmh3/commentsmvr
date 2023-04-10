const commentsGenerator = (user, comment, photo) => {
  const list = document.querySelector(".comment-list");
  let newComment = `<li>
    <div class="avatar">
      <img
        src="${photo}"
        alt=""
      />
    </div>
    <div class="comment-box">
      <div class="comment-username">
        <p class="username">${user}</p>
        <p class="comment">
          ${comment}
        </p>
      </div>
      <div class="comment-footer">
        <tr>
            <like>Curtir</like>
            ·
            <reply>Responder</reply>
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">
                ·
              </font>
            </font>
            <date>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                  agora
                </font>
              </font>
            </date>
          </td>
        </tr>
        <div class="reaction">
          <img src="assets/like.png" alt="" />
          <img src="assets/love.png" alt="" />
        </div>
      </div>
    </div>
  </li>`;

  list.innerHTML += newComment;
};

let commentsCount = 2301;
let currentCommentIndex = 0;

const commentCounter = document.querySelector('.comment-count')

function displayNextComment() {
  const {user, comment, photo} = comments[currentCommentIndex]

  const listItem = document.querySelector(".comment-list li:nth-child(1)");
  listItem.remove();
  commentsGenerator(user, comment, photo)
  currentCommentIndex++;

  if (currentCommentIndex === comments.length) {
    currentCommentIndex = 0;
  }
}

displayNextComment();

setInterval(displayNextComment, 1000);
