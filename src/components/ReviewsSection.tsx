import React, { useState } from 'react';
import { REVIEWS_LIST, REVIEWS_SUMMARY } from '../data/reviewsData';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquarePlus, CheckCircle2, X } from 'lucide-react';
import { Review } from '../types';

export const ReviewsSection: React.FC = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_LIST);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: newReviewAuthor.trim(),
      rating: newReviewRating,
      date: 'Just now',
      comment: newReviewComment.trim(),
      tag: 'Verified Patron',
      avatarBg: '#075C3B',
      source: 'Google'
    };

    setReviews([newRev, ...reviews]);
    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      setShowReviewModal(false);
      setNewReviewAuthor('');
      setNewReviewComment('');
    }, 2000);
  };

  return (
    <section
      id="reviews"
      className="relative py-20 sm:py-28 bg-[#043C2A] text-[#F6F0DD] overflow-hidden border-t border-[#D6B34A]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-brand tracking-widest uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-[#D6B34A] text-[#D6B34A]" />
            1,923 VERIFIED REVIEWS
          </div>

          <h2
            id="reviews-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F6F0DD]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Loved by <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">Chennai</span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D6B34A] to-transparent mx-auto my-4" />

          {/* Rating Big Stat Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 bg-[#075C3B]/60 px-5 py-2.5 rounded-2xl border border-[#D6B34A]/30">
              <div className="flex items-center text-[#E5C65A]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      i < 4 ? 'fill-[#E5C65A] text-[#E5C65A]' : 'fill-[#E5C65A]/40 text-[#E5C65A]'
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-lg sm:text-xl text-[#FFFDF5]">4.3 / 5.0</span>
              <span className="text-xs text-[#F6F0DD]/70">on Google Maps</span>
            </div>

            <button
              onClick={() => setShowReviewModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#043C2A] border border-[#D6B34A]/40 text-xs font-semibold text-[#FFF0BE] hover:bg-[#075C3B] transition-all"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#D6B34A]" />
              Share Your Experience
            </button>
          </div>
        </div>

        {/* Carousel & Featured Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.slice(0, 6).map((rev, idx) => (
            <div
              key={rev.id}
              id={`review-card-${idx}`}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#075C3B]/70 to-[#043C2A]/90 border border-[#D6B34A]/25 hover:border-[#D6B34A] transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars and Google Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#E5C65A]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E5C65A] text-[#E5C65A]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider text-[#D6B34A] bg-[#043C2A] px-2.5 py-0.5 rounded-full border border-[#D6B34A]/25">
                    {rev.source} Review
                  </span>
                </div>

                {/* Quote Icon */}
                <Quote className="w-6 h-6 text-[#D6B34A]/40 mb-2 rotate-180" />

                {/* Review Text */}
                <p className="text-sm text-[#F6F0DD]/90 italic leading-relaxed font-editorial text-base">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-[#D6B34A]/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs text-[#FFFDF5] border border-[#D6B34A]/50 shadow-inner"
                    style={{ backgroundColor: rev.avatarBg }}
                  >
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#FFFDF5]">{rev.author}</h4>
                    <span className="text-[10px] text-[#D6B34A] block">{rev.tag}</span>
                  </div>
                </div>
                <span className="text-[10px] text-[#F6F0DD]/50">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#043C2A] border border-[#D6B34A] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#F6F0DD]/70 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedFeedback ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-[#E5C65A] mx-auto mb-3 animate-bounce" />
                <h3 className="text-xl font-bold text-[#FFFDF5]">Thank You!</h3>
                <p className="text-xs text-[#F6F0DD]/80 mt-1">Your review has been recorded.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview}>
                <h3 className="font-display text-xl font-bold text-[#FFFDF5] mb-1">
                  Rate Kosmo Cafe
                </h3>
                <p className="text-xs text-[#F6F0DD]/70 mb-4">
                  Tell Chennai what you love about our Cold Milo or late-night bites.
                </p>

                {/* Rating selection */}
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReviewRating(star)}
                      className="p-1 text-[#E5C65A] focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newReviewRating ? 'fill-[#E5C65A]' : 'opacity-30'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-[#E5C65A] ml-2">
                    {newReviewRating} Stars
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#D6B34A] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vignesh R"
                      value={newReviewAuthor}
                      onChange={(e) => setNewReviewAuthor(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#075C3B]/60 border border-[#D6B34A]/30 text-xs text-[#F6F0DD] focus:outline-none focus:border-[#D6B34A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D6B34A] mb-1">
                      Your Feedback / Fav Items
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="The Cold Milo with extra malt was incredible..."
                      value={newReviewComment}
                      onChange={(e) => setNewReviewComment(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#075C3B]/60 border border-[#D6B34A]/30 text-xs text-[#F6F0DD] focus:outline-none focus:border-[#D6B34A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full text-xs font-bold tracking-widest font-brand uppercase gold-gradient-btn mt-2"
                  >
                    SUBMIT REVIEW
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
