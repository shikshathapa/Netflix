import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Question = () => {
  const questions = [
    "What is Netflix?",
    "How much does Netflix cost?",
    "Where can I watch?",
    "How do I cancel?",
    "What can I watch on Netflix?",
    "Is Netflix good for kids?",
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 lg:w-3/4 lg:mx-auto">
        {questions.map((question, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 border border-white rounded w-full"
          >
            <span className="text-lg font-medium text-white">{question}</span>
            <FontAwesomeIcon icon={faPlus} className="text-white" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
