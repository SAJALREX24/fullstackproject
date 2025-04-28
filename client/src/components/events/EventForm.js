import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { addEvent } from '../../redux/actions/eventActions';

const EventForm = ({ addEvent }) => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: ''
  });

  const { title, description, date } = eventData;

  const onChange = e => 
    setEventData({ ...eventData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    
    const success = await addEvent(eventData);
    
    if (success) {
      toast.success('Event created successfully');
      navigate('/');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 rounded-lg" style={{ 
            background: 'linear-gradient(135deg, rgba(0, 20, 0, 0.95) 0%, rgba(0, 40, 0, 0.95) 100%)',
            border: '1px solid #00ff41',
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)'
          }}>
            <div className="card-header text-center py-3" style={{
              background: 'rgba(0, 255, 65, 0.1)',
              borderBottom: '1px solid #00ff41',
              color: '#00ff41'
            }}>
              <h3 className="mb-0" style={{ textShadow: '0 0 10px #00ff41' }}>Create New Event</h3>
            </div>
            <div className="card-body p-4">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label" style={{ color: '#00ff41' }}>Event Title</label>
                  <div className="input-group">
                    <span className="input-group-text" style={{
                      background: 'rgba(0, 255, 65, 0.1)',
                      border: '1px solid #00ff41',
                      color: '#00ff41'
                    }}>
                      <i className="fas fa-heading"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={title}
                      onChange={onChange}
                      placeholder="Enter event title"
                      required
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid #00ff41',
                        color: '#ffffff'
                      }}
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="description" className="form-label" style={{ color: '#00ff41' }}>Event Description</label>
                  <div className="input-group">
                    <span className="input-group-text" style={{
                      background: 'rgba(0, 255, 65, 0.1)',
                      border: '1px solid #00ff41',
                      color: '#00ff41'
                    }}>
                      <i className="fas fa-align-left"></i>
                    </span>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={description}
                      onChange={onChange}
                      placeholder="Enter event description"
                      rows="4"
                      required
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid #00ff41',
                        color: '#ffffff'
                      }}
                    ></textarea>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="date" className="form-label" style={{ color: '#00ff41' }}>Event Date and Time</label>
                  <div className="input-group">
                    <span className="input-group-text" style={{
                      background: 'rgba(0, 255, 65, 0.1)',
                      border: '1px solid #00ff41',
                      color: '#00ff41'
                    }}>
                      <i className="fas fa-calendar-alt"></i>
                    </span>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="date"
                      name="date"
                      value={date}
                      onChange={onChange}
                      required
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid #00ff41',
                        color: '#ffffff'
                      }}
                    />
                  </div>
                  <small className="form-text" style={{ color: '#00ff41' }}>
                    Event date must be in the future
                  </small>
                </div>
                
                <div className="d-grid gap-2">
                  <button 
                    type="submit" 
                    className="btn" 
                    style={{
                      background: 'transparent',
                      border: '2px solid #00ff41',
                      color: '#00ff41',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#0d0208';
                      e.target.style.boxShadow = '0 0 20px #00ff41';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#00ff41';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <i className="fas fa-plus-circle me-2"></i>
                    Create Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EventForm.propTypes = {
  addEvent: PropTypes.func.isRequired
};

export default connect(null, { addEvent })(EventForm); 