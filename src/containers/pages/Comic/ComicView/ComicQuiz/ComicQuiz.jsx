import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./ComicQuiz.scss";
import { Helmet } from "react-helmet-async";
const questionsDudung = [
  {
    question: "Apa yang sedang dilakukan Dudung di panel pertama?",
    a: "Makan",
    b: "Bermain game",
    c: "Menonton TV",
    correctAnswer: "b",
  },
  {
    question: "Siapa yang menyuruh Dudung untuk belajar?",
    a: "Ayahnya",
    b: "Ibunya",
    c: "Gurunya",
    correctAnswer: "b",
  },
  {
    question: "Apa reaksi Dudung saat disuruh menyapu lantai rumah?",
    a: "Langsung menyapu",
    b: "Membalas dengan 'Iya, iya, ini aku berangkat'",
    c: "Marah-marah",
    correctAnswer: "b",
  },
  {
    question: "Apa yang dilakukan Dudung saat ibunya tidak melihat?",
    a: "Tidur",
    b: "Makan",
    c: "Menonton TV",
    correctAnswer: "c",
  },
  {
    question: "Apa alasan Dudung saat ibunya bertanya kenapa dia tidur?",
    a: "Tidak ada alasan",
    b: "Maaf bu",
    c: "Sakit kepala",
    correctAnswer: "b",
  },
];

const questionsTangkubanPerahu = [
  {
    question: "Siapa yang menjatuhkan alat jahit?",
    a: "Dayang Sumbi",
    b: "Tumang",
    c: "Sangkuriang",
    correctAnswer: "a",
  },
  {
    question: "Siapa Tumang?",
    a: "Anak Dayang Sumbi",
    b: "Anjing kesayangan istana",
    c: "Gurunya",
    correctAnswer: "b",
  },
  {
    question: "Apa yang dilakukan Sangkuriang saat disuruh mencari hati rusa?",
    a: "Langsung mencari",
    b: "Marah-marah",
    c: "Membunuh Tumang",
    correctAnswer: "c",
  },
  {
    question: "Apa alasan Sangkuriang memberikan hati Tumang?",
    a: "Tidak menemukan rusa",
    b: "Sakit hati",
    c: "Ingin mencoba",
    correctAnswer: "a",
  },
  {
    question: "Apa yang terjadi setelah Dayang Sumbi tahu kebenaran?",
    a: "Mengusir Sangkuriang",
    b: "Menerima Sangkuriang",
    c: "Menangis",
    correctAnswer: "a",
  },
];

const ComicQuiz = () => {
  const { id } = useParams();
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (id === "1") {
        setQuestions(shuffleArray(questionsDudung));
      } else if (id === "2") {
        setQuestions(shuffleArray(questionsTangkubanPerahu));
      }
    };

    fetchQuestions();
  }, [id]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer("");
    setIsCorrect(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };
  const navigate = useNavigate();

  return (
    <div className="comic-s-co">
      <Helmet>
        <title>Comic Quiz</title>
      </Helmet>

      <h1 onClick={() => navigate(-1)}>
        <span className="material-symbols-rounded">arrow_back</span> Comic
      </h1>
      {quizFinished ? (
        <div className="comicf">
          <h2>Quiz berakhir!</h2>
          <p>
            Skor kamu: {score}/{questions.length}
          </p>
          <button onClick={() => navigate(-1)}>Kembali ke comic</button>
        </div>
      ) : (
        questions.length > 0 && (
          <div className="quiz-s">
            <h3>Quiz</h3>
            <h2>{questions[currentQuestion].question}</h2>
            <div className="pick">
              {["a", "b", "c"].map((option) => (
                <button
                  className="option"
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={!!selectedAnswer}
                >
                  {questions[currentQuestion][option]}
                </button>
              ))}
            </div>
            {selectedAnswer && (
              <div className="salah">
                <p>Jawaban : {isCorrect ? <p>Benar!</p> : <p>Salah!</p>}</p>

                <button onClick={nextQuestion}>Selanjutnya</button>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default ComicQuiz;
