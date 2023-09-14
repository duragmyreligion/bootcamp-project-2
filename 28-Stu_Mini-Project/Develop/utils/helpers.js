module.exports = {
    get_emoji: () => {
      const randomNum = Math.random();
      let emoji = "💻";
  
      if (randomNum > 0.7) {
        emoji = "⚙️";
      } else if (randomNum > 0.4) {
        emoji = "💡";
      }
  
      return `<span for="img" aria-label="emoji">${emoji}</span>`;
    },

    format_date: (date) => {
        return date.toLocaleDateString();
    },

    format_amount: (amount) => {
        return parseInt(amount).toLocaleString();
    }
  };
  