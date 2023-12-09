import React from "react";

const commentsData = [
  {
    name: "Norman Vincent Peale",
    text: "When you change your thoughts, remember to also change your world.",
    replies: [
      {
        name: " Albert Einstein",
        text: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
        replies: [
          {
            name: "Mark Twain",
            text: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
            replies: [],
          },
          {
            name: "Diane McLaren",
            text: "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
            replies: [],
          },
        ],
      },
      {
        name: " Henry David Thoreau",
        text: "Success usually comes to those who are too busy looking for it.",
        replies: [],
      },
      {
        name: "Dale Carnegie",
        text: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
        replies: [
          {
            name: "Calvin Coolidge",
            text: "He who conquers himself is the mightiest warrior.",
            replies: [],
          },
          {
            name: "Estée Lauder",
            text: "Just one small positive thought in the morning can change your whole day",
            replies: [
              {
                name: " Will Rogers",
                text: "Don’t let yesterday take up too much of today.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    name: " Epictetus",
    text: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
    replies: [
      {
        name: "John Graham",
        text: "You’ll find that education is just about the only thing lying around loose in this world, and it’s about the only thing a fellow can have as much of as he’s willing to haul away.",
        replies: [],
      },
    ],
  },
  {
    name: "Wasim Akram",
    text: "Just one small positive thought in the morning can change your whole day",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex  p-2 rounded-lg my-2 items-center xs:p-1 xs:my-1 md:my-3">
      <img
        className="xs:w-5 xs:h-5"
        alt="User Icon"
        src="https://us.123rf.com/450wm/anatolir/anatolir2011/anatolir201105528/159470802-jurist-avatar-icon-flat-style.jpg?ver\u003d6"
      />
      <div className="px-3 xs:px-1">
        <p className="font-bold xs:font-normal">{name}</p>
        <p className="xs:font-light xs:text-xs sml:text-base sml:font-normal">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

function CommentContainer({ commentCount }) {
  return (
    <>
      <div className="xs:w-[280px] sm:w-[375px] sml:w-[500px] md:w-[667px] mdl:w-[768px] lg:w-[992px]">
        <h1 className="text-xl font-bold py-5 xs:text-base xs:font-medium xs:py-4 sm:text-lg">
          {commentCount} Comments{" "}
          <span className="font-normal ml-5 text-base xs:ml-2 xs:text-xs sm:text-lg ">
            <i className="fa-solid fa-arrow-down-wide-short "></i> sort by
          </span>
        </h1>
        <CommentsList comments={commentsData} />
      </div>
    </>
  );
}

export default CommentContainer;
