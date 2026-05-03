import { create } from "zustand";

interface ProgressState {
  completedLessons: string[];
  markLessonComplete: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  getCompletedCount: (levelId: string) => number;
}

export const useProgress = create<ProgressState>((set, get) => {
  // Load initial state from localStorage
  const savedProgress = typeof window !== 'undefined' ? localStorage.getItem('grammar_progress') : null;
  const initialCompletedLessons = savedProgress ? JSON.parse(savedProgress) : [];

  return {
    completedLessons: initialCompletedLessons,
    
    markLessonComplete: (lessonId: string) => {
      set((state) => {
        if (state.completedLessons.includes(lessonId)) return state;
        
        const newCompleted = [...state.completedLessons, lessonId];
        localStorage.setItem('grammar_progress', JSON.stringify(newCompleted));
        return { completedLessons: newCompleted };
      });
    },
    
    isLessonCompleted: (lessonId: string) => {
      return get().completedLessons.includes(lessonId);
    },
    
    getCompletedCount: (levelId: string) => {
      // levelId format: 'beginner', 'intermediate', 'advanced'
      // lessonId format: 'beginner-1', 'intermediate-2', etc.
      return get().completedLessons.filter(id => id.startsWith(`${levelId}-`)).length;
    }
  };
});
