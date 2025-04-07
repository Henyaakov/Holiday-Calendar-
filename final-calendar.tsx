import React, { useState } from 'react';

const FinalCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(3); // April 2025
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // Month names in Hebrew
  const monthNames = [
    'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
    'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
  ];
  
  // Day names in Hebrew
  const dayNames = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
  
  // חגים ומועדים - תאריכים מדויקים
  const holidays = {
    '2025-04-13': { name: 'פסח', category: 'holiday' },
    '2025-04-14': { name: 'פסח', category: 'holiday' },
    '2025-04-15': { name: 'פסח', category: 'holiday' },
    '2025-04-16': { name: 'פסח', category: 'holiday' },
    '2025-04-17': { name: 'פסח', category: 'holiday' },
    '2025-04-18': { name: 'פסח', category: 'holiday' },
    '2025-04-19': { name: 'פסח', category: 'holiday' },
    '2025-04-20': { name: 'אסרו חג', category: 'holiday' },
    '2025-04-23': { name: 'ערב יום הזכרון לשואה ולגבורה', category: 'memorial' },
    '2025-04-24': { name: 'יום הזכרון לשואה ולגבורה', category: 'memorial' },
    '2025-04-29': { name: 'ערב יום הזכרון לחללי מערכות ישראל', category: 'memorial' },
    '2025-04-30': { name: 'יום הזכרון לחללי מערכות ישראל', category: 'memorial' },
    '2025-05-01': { name: 'יום העצמאות', category: 'independence' },
    '2025-05-15': { name: 'ל"ג בעומר', category: 'holiday' },
    '2025-05-26': { name: 'יום ירושלים', category: 'holiday' },
    '2025-06-01': { name: 'שבועות', category: 'holiday' },
    '2025-06-02': { name: 'שבועות', category: 'holiday' },
    '2025-06-03': { name: 'שבועות', category: 'holiday' }
  };
  
  // אירועים לפי שבועות - הכל מסודר לפי תאריכים מדויקים
  const events = [
    // אפריל
    {
      id: 'adumManagers1',
      title: 'הסברה למנהלים קהילתיים בתוואי האדום',
      week: '2025-04-27',
      days: [0, 1], // ראשון, שני
      color: 'red',
      details: 'הסברה למנהלים קהילתיים בתוואי האדום: קריית משה, רוממה, לב העיר, מזרח העיר- שער שכם, גאולה, רמת אשכול, הגבעה הצרפתית'
    },
    // מאי
    {
      id: 'adumManagers2',
      title: 'הסברה למנהלים קהילתיים בתוואי האדום',
      week: '2025-05-04',
      days: [0, 1, 2, 3, 4], // ראשון-חמישי
      color: 'red',
      details: 'הסברה למנהלים קהילתיים בתוואי האדום: קריית משה, רוממה, לב העיר, מזרח העיר- שער שכם, גאולה, רמת אשכול, הגבעה הצרפתית'
    },
    {
      id: 'blindSchool',
      title: 'ערב הסברה ושירה בציבור בית חינוך עיוורים',
      week: '2025-05-04',
      days: [1, 2, 3, 4], // שני-חמישי
      color: 'indigo',
      details: 'ערב הסברה ושירה בציבור בבית חינוך עיוורים בעדיפות גבוהה לאור השבתת הרכבת באזור זה'
    },
    {
      id: 'adumManagers3',
      title: 'הסברה למנהלים קהילתיים בתוואי האדום',
      week: '2025-05-11',
      days: [0, 1, 2, 3, 4], // ראשון-חמישי
      color: 'red',
      details: 'הסברה למנהלים קהילתיים בתוואי האדום: קריית משה, רוממה, לב העיר, מזרח העיר- שער שכם, גאולה, רמת אשכול, הגבעה הצרפתית'
    },
    {
      id: 'trainShutdown',
      title: '⚠️ השבתת הרכבת בין התחנה המרכזית לגבעת המבתר',
      week: '2025-05-18',
      days: [0], // רק יום ראשון
      color: 'pink',
      isBold: true,
      details: 'שימו לב להשבתה משמעותית בתוואי הרכבת הקלה בין התחנה המרכזית לגבעת המבתר. יש להיערך לאמצעי תחבורה חלופיים.'
    },
    {
      id: 'greenManagers1',
      title: 'הסברה למנהלים קהילתיים בתוואי הירוק',
      week: '2025-05-18',
      days: [0, 1, 2, 3, 4], // ראשון-חמישי
      color: 'green',
      details: 'הסברה למנהלים קהילתיים בתוואי הירוק: גבעת מרדכי, גוננים, מלחה, גילה. אין השפעה ישירה של השבתת הרכבת'
    },
    {
      id: 'greenManagers2',
      title: 'הסברה למנהלים קהילתיים בתוואי הירוק',
      week: '2025-05-25',
      days: [0, 1, 2, 3, 4], // ראשון-חמישי
      color: 'green',
      details: 'הסברה למנהלים קהילתיים בתוואי הירוק: גבעת מרדכי, גוננים, מלחה, גילה. אין השפעה ישירה של השבתת הרכבת'
    },
    // יוני
    {
      id: 'nofim1', 
      title: 'דיור מוגן "נופים"',
      week: '2025-06-08',
      days: [0, 1, 2, 3, 4],
      color: 'blue',
      details: 'ערב הסברה ושירה בציבור לדיור מוגן "נופים". הרכבת אינה מושבתת באזור זה'
    },
    {
      id: 'regularManagers1',
      title: 'הסברה למנהלים קהילתיים ללא השבתת רכבת',
      week: '2025-06-08',
      days: [0, 1, 2, 3, 4], // ראשון-חמישי
      color: 'purple',
      details: 'הסברה למנהלים קהילתיים ללא השבתת רכבת: יובלים, עיר גנים, מושב אורה/עמינדב, נווה יעקב, בית הכרם, בית וגן, שועפט, בית חנינא, פסגת זאב'
    },
    {
      id: 'nofim2',
      title: 'דיור מוגן "נופים"',
      week: '2025-06-15',
      days: [0, 1, 2, 3, 4],
      color: 'blue',
      details: 'ערב הסברה ושירה בציבור לדיור מוגן "נופים". הרכבת אינה מושבתת באזור זה'
    },
    {
      id: 'alwin',
      title: 'עמותת "אלווין"',
      week: '2025-06-22',
      days: [0, 1, 2, 3, 4],
      color: 'teal',
      details: 'יום הסברה ויצירה בעמותת "אלווין". לפי בקשת העמותה לפעילות מחודש יוני ומעלה. הרכבת אינה מושבתת באזור זה'
    },
    {
      id: 'regularManagers2',
      title: 'הסברה למנהלים קהילתיים ללא השבתת רכבת',
      week: '2025-06-22',
      days: [0, 1, 2, 3, 4], // ראשון-חמישי
      color: 'purple',
      details: 'הסברה למנהלים קהילתיים ללא השבתת רכבת: יובלים, עיר גנים, מושב אורה/עמינדב, נווה יעקב, בית הכרם, בית וגן, שועפט, בית חנינא, פסגת זאב'
    }
  ];
  
  // יצירת התאריך מהיום וחודש
  const getDateString = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };
  
  // יצירת מערך של ימי החודש
  const getDaysArray = () => {
    const result = [];
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    
    // תאים ריקים בתחילת החודש
    for (let i = 0; i < firstDay; i++) {
      result.push(null);
    }
    
    // ימי החודש
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = getDateString(currentYear, currentMonth, day);
      result.push({
        day,
        date: dateString,
        holiday: holidays[dateString],
        events: []
      });
    }
    
    // סידור בשורות של 7 ימים
    const weeks = [];
    for (let i = 0; i < result.length; i += 7) {
      weeks.push(result.slice(i, i + 7));
    }
    
    return weeks;
  };
  
  // בניית מערך של אירועים שבועיים
  const getWeeklyEvents = (weeks) => {
    // מעבר על כל השבועות
    return weeks.map(week => {
      // סינון ימים ריקים
      const validDays = week.filter(day => day !== null);
      if (validDays.length === 0) return { week, events: [] };
      
      // מציאת תאריך היום הראשון בשבוע
      const firstDay = validDays[0];
      const weekStart = new Date(firstDay.date);
      
      // התאמה ליום ראשון של השבוע
      while (weekStart.getDay() !== 0) {
        weekStart.setDate(weekStart.getDate() - 1);
      }
      
      // מציאת אירועים לשבוע זה
      const weekStartStr = weekStart.toISOString().split('T')[0];
      const weekEvents = events.filter(event => {
        const eventWeekStart = new Date(event.week);
        const eventWeekStartStr = eventWeekStart.toISOString().split('T')[0];
        return eventWeekStartStr === weekStartStr;
      });
      
      return { week, events: weekEvents };
    });
  };
  
  // קבלת צבע רקע לפי סוג חג/אירוע
  const getHolidayStyle = (holiday) => {
    if (!holiday) return {};
    
    switch (holiday.category) {
      case 'holiday':
        return { backgroundColor: '#FEF3C7' }; // bg-yellow-100
      case 'memorial':
        return { backgroundColor: '#E5E7EB' }; // bg-gray-200
      case 'independence':
        return { backgroundColor: '#BFDBFE' }; // bg-blue-200
      default:
        return {};
    }
  };
  
  // החלפת חודש
  const changeMonth = (delta) => {
    const newMonth = currentMonth + delta;
    if (newMonth >= 3 && newMonth <= 5) { // רק אפריל עד יוני
      setCurrentMonth(newMonth);
    }
  };
  
  // רינדור של הלוח
  const renderCalendar = () => {
    const weeks = getDaysArray();
    const weeksWithEvents = getWeeklyEvents(weeks);
    
    return (
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {dayNames.map((name, i) => (
              <th key={i} className="p-2 border bg-gray-100 font-bold">
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeksWithEvents.map((weekData, weekIndex) => {
            const { week, events: weekEvents } = weekData;
            
            // שורת הימים
            const dayRow = (
              <tr key={`week-${weekIndex}`} className="h-24">
                {week.map((day, dayIndex) => {
                  if (day === null) {
                    return <td key={`empty-${dayIndex}-${weekIndex}`} className="border bg-gray-50"></td>;
                  }
                  
                  const isWeekend = dayIndex >= 5;
                  const holiday = day.holiday;
                  const holidayStyle = getHolidayStyle(holiday);
                  
                  return (
                    <td 
                      key={`day-${day.day}-${weekIndex}`} 
                      className="border p-1 relative"
                      style={isWeekend ? {backgroundColor: '#E5E7EB'} : holidayStyle}
                    >
                      <div className="font-bold text-right">{day.day}</div>
                      {holiday && (
                        <div className="text-sm p-1 border border-yellow-400 rounded text-right">
                          {holiday.name}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
            
            // שורות האירועים
            const eventRows = weekEvents.map((event, eventIndex) => {
              // בניית שורת אירוע
              return (
                <tr key={`event-${weekIndex}-${eventIndex}`} className="h-6">
                  {Array(7).fill(null).map((_, dayIndex) => {
                    const isEventDay = event.days.includes(dayIndex);
                    const isStart = isEventDay && !event.days.includes(dayIndex - 1);
                    const isEnd = isEventDay && !event.days.includes(dayIndex + 1);
                    
                    // יצירת פריסת האירוע
                    if (isStart) {
                      const spanCount = event.days.filter(d => d >= dayIndex).length;
                      let bgColor = '#FEE2E2';  // red-100
                      let borderColor = '#EF4444';  // red-500
                      
                      switch (event.color) {
                        case 'red':
                          bgColor = '#FEE2E2'; borderColor = '#EF4444'; break;
                        case 'green':
                          bgColor = '#DCFCE7'; borderColor = '#22C55E'; break;
                        case 'blue':
                          bgColor = '#DBEAFE'; borderColor = '#3B82F6'; break;
                        case 'purple':
                          bgColor = '#F3E8FF'; borderColor = '#A855F7'; break;
                        case 'pink':
                          bgColor = '#FCE7F3'; borderColor = '#EC4899'; break;
                        case 'indigo':
                          bgColor = '#E0E7FF'; borderColor = '#6366F1'; break;
                        case 'teal':
                          bgColor = '#CCFBF1'; borderColor = '#14B8A6'; break;
                      }
                      
                      return (
                        <td 
                          key={`event-cell-${weekIndex}-${eventIndex}-${dayIndex}`}
                          colSpan={spanCount}
                          className="border-0 text-sm cursor-pointer"
                          style={{
                            borderBottom: `2px solid ${borderColor}`,
                            backgroundColor: bgColor,
                            fontWeight: event.isBold ? 'bold' : 'normal',
                            textAlign: 'center'
                          }}
                          onClick={() => setSelectedEvent(event)}
                        >
                          {event.title}
                        </td>
                      );
                    } else if (isEventDay) {
                      // כבר נכלל ב-colspan
                      return null;
                    } else {
                      // תא ריק
                      return <td key={`event-empty-${weekIndex}-${eventIndex}-${dayIndex}`} className="border-0"></td>;
                    }
                  })}
                </tr>
              );
            });
            
            return [dayRow, ...eventRows];
          })}
        </tbody>
      </table>
    );
  };
  
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded shadow" dir="rtl">
      {/* כותרת וניווט */}
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={() => changeMonth(-1)}
          className={`px-4 py-2 rounded ${currentMonth > 3 ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-100 cursor-not-allowed'}`}
          disabled={currentMonth <= 3}
        >
          הקודם
        </button>
        <h2 className="text-xl font-bold">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <button 
          onClick={() => changeMonth(1)}
          className={`px-4 py-2 rounded ${currentMonth < 5 ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-100 cursor-not-allowed'}`}
          disabled={currentMonth >= 5}
        >
          הבא
        </button>
      </div>
      
      {/* לוח */}
      {renderCalendar()}
      
      {/* מקרא */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <div className="flex mb-2">
            <div className="h-4 w-4 mr-2 mt-1" style={{backgroundColor: '#FEE2E2', border: '2px solid #EF4444'}}></div>
            <div>הסברה למנהלים קהילתיים בתוואי האדום</div>
          </div>
          <div className="flex mb-2">
            <div className="h-4 w-4 mr-2 mt-1" style={{backgroundColor: '#FCE7F3', border: '2px solid #EC4899'}}></div>
            <div>השבתת הרכבת</div>
          </div>
          <div className="flex mb-2">
            <div className="h-4 w-4 mr-2 mt-1" style={{backgroundColor: '#DCFCE7', border: '2px solid #22C55E'}}></div>
            <div>הסברה למנהלים קהילתיים בתוואי הירוק</div>
          </div>
        </div>
        <div>
          <div className="flex mb-2">
            <div className="h-4 w-4 mr-2 mt-1" style={{backgroundColor: '#F3E8FF', border: '2px solid #A855F7'}}></div>
            <div>הסברה למנהלים קהילתיים ללא השבתת רכבת</div>
          </div>
        </div>
      </div>
      
      {/* חלונית מידע לאירוע */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50" 
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-4" 
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-2">{selectedEvent.title}</h3>
            <p className="text-gray-700">{selectedEvent.details}</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setSelectedEvent(null)}
            >
              סגור
            </button>
          </div>
        </div>
      )}
      
      <div className="mt-4 text-center text-sm text-gray-500">
        לחצו על אירוע כדי לראות פרטים נוספים
      </div>
    </div>
  );
};

export default FinalCalendar;