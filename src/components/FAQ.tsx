import { motion } from "motion/react";

const FAQ_ITEMS = [
  {
    question: "What form does Inko take?",
    answer: "Inko is a mobile app (currently prioritizing iOS beta). Simply record or upload audio after a call or meeting, and AI handles the rest: organizing, generating, and storing insights.",
  },
  {
    question: "Do I need to record the entire conversation?",
    answer: "Inko supports full recording and manual uploads of audio clips. The more complete the recording, the more accurate the generated review and follow-up content will be.",
  },
  {
    question: "Is the recording data secure?",
    answer: "Your audio and conversation data are used only to generate analysis results and will not be used for model training or shared with third parties. We value data privacy; please refer to our Privacy Policy for details.",
  },
  {
    question: "What meeting formats does Inko support?",
    answer: "Inko currently focuses on sales communication, supporting client conversation processing within the app. It covers basic workflows including post-meeting summaries, follow-up generation, AI Q&A, and client data storage.",
  },
  {
    question: "Can I use it even if I don't know how to use a CRM?",
    answer: "Yes. Inko isn't meant to replace all CRMs, but to help you first organize and store sales interactions, making post-meeting records easier and gradually building your own client database.",
  },
  {
    question: "Do I need to edit the generated email content?",
    answer: "It is generally recommended to do a quick review before sending. Inko generates ready-to-use email drafts based on the current conversation, significantly reducing the friction between 'not knowing what to write' and 'getting it sent'.",
  },
];

export const FAQ = () => (
  <section id="faq" className="bg-transparent px-6 py-32">
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-20 text-center text-5xl tracking-tight font-mono font-bold">FAQ</h2>
      <div className="space-y-12">
        {FAQ_ITEMS.map((faq, index) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <p className="mb-2 text-2xl" style={{ color: "var(--text-muted)" }}>{faq.question}</p>
            <p className="font-sans text-xl leading-relaxed font-normal" style={{ color: "var(--text-primary)" }}>{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
