import React, { useState } from 'react';
import { REVIEWS_LIST, REVIEWS_SUMMARY } from '../data/reviewsData';
import { Review } from '../types';
import { Star, Quote, MessageSquarePlus, CheckCircle2, X, Award, Sparkles, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_LIST);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);
  const [filterTag, setFilterTag] = useState<string>('ALL');

  const ratingCategories = [
    { label: 'Signature Cold Milo', rating: '4.9 ★', desc: 'Acclaimed across food blogs & night owls' },
    { label: 'Late-Night Speed', rating: '4.7 ★', desc: 'Fast preparation even at 2:30 AM' },
    { label: 'Cafe Ambience & Seating', rating: '4.6 ★', desc: 'Outdoor garden turf & warm lighting' },
    { label: 'Comfort Bites & Wings', rating: '4.4 ★', desc: 'Freshly seasoned, crunchy & hot' },
  ];

  const filteredReviews = reviews.filter((r) => {
    if (filterTag === 'ALL') return true;
    if (filterTag === '5STAR') return r.rating === 5;
    if (filterTag === 'MILO') return r.comment.toLowerCase().includes('milo');
    if (filterTag === 'NIGHT') return r.comment.toLowerCase().includes('night') || r.comment.toLowerCase().includes('late');
    return true;
  });

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
    }, 1800);
  };

  return (
    <div id="reviews-page" className="min-h-screen bg-[#043C2A] text-[#F6F0DD] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#075C3B] border border-[#D6B34A]/40 text-[#E5C65A] text-xs font-brand tracking-widest uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-[#D6B34A] text-[#D6B34A]" />
            1,923+ VERIFIED GOOGLE REVIEWS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#F6F0DD]">
            Loved by <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0BE] via-[#E5C65A] to-[#D6B34A]">Chennai</span>
          </h1>
          <div className="w-24 h-[2px] bg-[#D6B34A] mx-auto my-4" />
          <p className="text-base sm:text-lg text-[#F6F0DD]/85 leading-relaxed font-light">
            Real experiences from foodies, night owls, college students, and regulars who make Kosmo their second home.
          </p>

          {/* Rating Summary Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-3 bg-[#075C3B]/60 px-6 py-3 rounded-2xl border border-[#D6B34A]/30 shadow-xl">
              <div className="flex items-center text-[#E5C65A]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4 ? 'fill-[#E5C65A] text-[#E5C65A]' : 'fill-[#E5C65A]/40 text-[#E5C65A]'
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-2xl text-[#FFFDF5]">4.3 / 5.0</span>
              <span className="text-xs text-[#F6F0DD]/70 border-l border-[#D6B34A]/30 pl-3">
                1,923 Ratings on Google
              </span>
            </div>

            <button
              onClick={() => setShowReviewModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-brand text-xs font-bold tracking-widest uppercase gold-gradient-btn shadow-lg"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#043C2A]" />
              LEAVE A REVIEW
            </button>
          </div>
        </div>

        {/* Breakdown Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {ratingCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#022419] border border-[#D6B34A]/25 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D6B34A] block mb-1">
                  PATRON HIGHLIGHT
                </span>
                <h3 className="font-bold text-sm text-[#FFFDF5]">{cat.label}</h3>
                <p className="text-xs text-[#F6F0DD]/70 mt-1">{cat.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#D6B34A]/15 flex items-center justify-between">
                <span className="text-sm font-bold text-[#E5C65A]">{cat.rating}</span>
                <span className="text-[10px] text-[#FFF0BE]/60">Verified score</span>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#D6B34A]" />
            <span className="text-xs font-semibold text-[#F6F0DD]/70">Filter:</span>
            {[
              { id: 'ALL', label: 'All Reviews' },
              { id: '5STAR', label: '5-Star Only' },
              { id: 'MILO', label: 'Milo Reviews' },
              { id: 'NIGHT', label: 'Late-Night Reviews' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterTag(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filterTag === tab.id
                    ? 'bg-[#D6B34A] text-[#043C2A] font-bold shadow-md'
                    : 'bg-[#075C3B]/60 text-[#F6F0DD]/80 hover:bg-[#075C3B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <span className="text-xs text-[#F6F0DD]/60">
            Showing {filteredReviews.length} reviews
          </span>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#075C3B]/70 to-[#043C2A]/95 border border-[#D6B34A]/25 hover:border-[#D6B34A] transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#E5C65A]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E5C65A] text-[#E5C65A]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider text-[#D6B34A] bg-[#043C2A] px-2.5 py-0.5 rounded-full border border-[#D6B34A]/25">
                    {rev.source} Review
                  </span>
                </div>

                <Quote className="w-6 h-6 text-[#D6B34A]/40 mb-2 rotate-180" />

                <p className="text-sm text-[#F6F0DD]/90 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

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

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-3xl bg-[#075C3B]/30 border border-[#D6B34A]/30">
          <h3 className="font-serif text-2xl font-bold text-[#FFFDF5] mb-2">
            Ready to Experience It Yourself?
          </h3>
          <p className="text-xs sm:text-sm text-[#F6F0DD]/80 max-w-md mx-auto mb-6">
            Join the hundreds of daily patrons who visit 199 TTK Road in Alwarpet.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/menu"
              className="px-7 py-3 rounded-full font-brand text-xs font-bold tracking-widest uppercase gold-gradient-btn"
            >
              EXPLORE OUR MENU
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full text-xs font-semibold text-[#FFF0BE] border border-[#D6B34A]/40 hover:bg-[#075C3B]"
            >
              LOCATION & DIRECTIONS
            </Link>
          </div>
        </div>

      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
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
                <p className="text-xs text-[#F6F0DD]/80 mt-1">Your review has been published to the community board.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview}>
                <h3 className="font-serif text-xl font-bold text-[#FFFDF5] mb-1">
                  Rate Kosmo Cafe
                </h3>
                <p className="text-xs text-[#F6F0DD]/70 mb-4">
                  Tell Chennai what you love about our Cold Milo or late-night bites.
                </p>

                {/* Rating Stars */}
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
                      Your Feedback / Favorite Items
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
                    POST REVIEW
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
