export const projects = [
  {
    id: 'resumeradar',
    title: 'ResumeRadar',
    shortDescription:
      'AI-powered resume and JD matching system using NLP, NER, embeddings, and skill classification.',
    tags: ['FastAPI', 'React/Vite', 'DistilBERT', 'NER', 'Docker'],
    statusBadge: 'NLP Pipeline',
    thumbnail: '/assets/projects/resumeradar.png',
    links: {
      github: 'https://github.com/anujott-codes/ResumeRadar',
      demo: 'https://www.youtube.com/watch?v=iT_0WsJy2C0',
      huggingface:
        'https://huggingface.co/anujot/resumeradar-skill-classifier',
    },
    details:
      'ResumeRadar parses resumes, extracts skills, classifies hard vs soft skills, and compares candidate profiles against job descriptions. The project combines resume parsing, NER, semantic embeddings, section segmentation, filtering logic, and a FastAPI backend into a full-stack NLP system.',
  },
  {
    id: 'churn',
    title: 'Churn ML Platform',
    shortDescription:
      'Production-style churn prediction platform with model tracking, versioning, API serving, and CI/CD.',
    tags: ['LightGBM', 'Optuna', 'MLflow', 'DVC', 'FastAPI', 'Docker'],
    statusBadge: 'Live',
    isLive: true,
    thumbnail: '/assets/projects/churn.png',
    metrics: ['ROC-AUC 0.952', 'Recall 0.988'],
    links: {
      github: 'https://github.com/anujott-codes/churn-ml-platform',
      live: 'https://churn-ml-platform.vercel.app',
      demo: 'https://youtu.be/EHSjBYZUhHQ?si=fP6dgKXoH9f9qvsg',
    },
    details:
      'Churn ML Platform is a production-style MLOps project covering training, hyperparameter tuning, experiment tracking, data/model versioning, Dockerized API serving, and CI/CD workflows. It is designed to show end-to-end ML engineering beyond notebook-based modeling.',
  },
  {
    id: 'approvio',
    title: 'Approv.io',
    shortDescription:
      'Credit risk modeling project focused on explainability and decision support using XGBoost and SHAP.',
    tags: ['XGBoost', 'SHAP', 'FastAPI', 'React', 'scikit-learn'],
    statusBadge: 'Explainable AI',
    thumbnail: '/assets/projects/approvio.png',
    links: {
      github: 'https://github.com/anujott-codes/Approv.io',
    },
    details:
      'Approv.io focuses on explainable credit risk modeling using XGBoost and SHAP. The project highlights feature-level explanations and interpretable model outputs for high-stakes decision support.',
  },
  {
    id: 'vidmind',
    title: 'VidMind',
    shortDescription:
      'Conversational AI system that turns videos into transcripts, summaries, action items, and RAG chat.',
    tags: ['Whisper', 'LangChain', 'Mistral AI', 'ChromaDB', 'RAG', 'FastAPI'],
    statusBadge: 'GenAI / RAG',
    thumbnail: '/assets/projects/vidmind.png',
    links: {
      github: 'https://github.com/anujott-codes/VidMind',
      demo: 'https://youtu.be/cUmxAyjbxj4?si=uXSNVfhMsfFrwd3-',
    },
    details:
      'VidMind processes YouTube or local video input, transcribes audio with Whisper, summarizes transcripts, extracts decisions and action items, stores chunks in ChromaDB, and enables conversational question-answering through a RAG pipeline.',
  },
];
