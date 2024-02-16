import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Sadhguru",
    text: "Namaskaram Amith!",
    replies: [
      {
        name: "Amith Kashyap",
        text: "Namaskaram Sadhguru 🙏🏼!",
        replies: [
          {
            name: "Amith Kashyap",
            text: "I seek your blessings and grace Sadhguru! With that I will be able to achieve more and work for the betterment of our people",
            replies: [
              {
                name: "Sadhguru",
                text: "You always have my blessings and you are always in Grace! Remember",
                replies: [
                  {
                    name: "Amith Kashyap",
                    text: "Thank you so much Sadhguru! I bow down to your lotus feet! 🙏🏼",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Deepthi B",
    text: "Awesome Amith!",
    replies: [
      {
        name: "Amith Kashyap",
        text: "Thank you so much!",
        replies: [
          {
            name: "Deepthi B",
            text: "Way to go!",
            replies: [
              {
                name: "Amith Kashyap",
                text: "Thank you for all the support!",
                replies: [
                  {
                    name: "Deepthi",
                    text: "It was all your hardwork and dedication!",
                    replies: [
                      {
                        name: "Amith Kashyap",
                        text: "Not just that, it was also your patience and Sadhguru's grace",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Savithri",
    text: "Super Ammu",
    replies: [
      {
        name: "Amith Kashyap",
        text: "Thank you so much Amma!",
        replies: [],
      },
    ],
  },
  {
    name: "Hiriyannaiah",
    text: "Proud of you Amith",
    replies: [
      {
        name: "Amith Kashyap",
        text: "Thank you so much Appa!",
        replies: [],
      },
    ],
  },
  {
    name: "Ashwini H",
    text: "I knew you would do something great!",
    replies: [
      {
        name: "Amith Kashyap",
        text: "Thanks a lot Ashu",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-semibold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
