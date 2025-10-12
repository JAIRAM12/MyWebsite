export default function FAQSection() {
  const faqs = [
    {
      question: "What are the application deadlines?",
      answer: "Our Early Action deadline is November 1st, and the Regular Decision deadline is January 15th. We encourage all prospective students to apply as early as possible."
    },
    {
      question: "Do you offer financial aid?",
      answer: "Yes, we are committed to making education accessible. We offer a wide range of need-based financial aid, scholarships, and grants. Please visit our financial aid office page for more details."
    },
    {
      question: "Can I visit the campus?",
      answer: "Absolutely! We welcome prospective students and their families to tour our beautiful campus. You can book a guided tour or explore on your own using our virtual tour guide."
    }
  ];

  const PlusIcon = () => (
    <svg className="faq-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );

  return (
    <section id="admissions" className="container section-padding">
      <div className="section-header reveal-on-scroll">
        <span className="tag tag-yellow">Got Questions?</span>
        <h2 className="h2-section text-center">Admissions FAQ</h2>
      </div>
      <div className="max-w-2xl mx-auto reveal-on-scroll">
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item">
            <summary>
              {faq.question}
              <PlusIcon />
            </summary>
            <p className="faq-content body-text">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}