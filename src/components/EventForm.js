import React, {useState} from 'react';

const EventForm = ({ state, dispatch}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onClickAddEvent = e => {
    e.preventDefault();
    dispatch(
      {
        type: 'CREATE_EVENT',
        title,
        body
      }
    );

    setTitle('');
    setBody('');
  }

  const onClickDeleteAllEvents = e => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？');
    if(result) dispatch({ type: 'DELETE_ALL_EVENT' })
  }

  const unCreatable = title === '' || body === '';

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='formEventBody'>ボディ</label>
          <textarea className='form-control' id='formEventBody' value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className='btn btn-primary' onClick={onClickAddEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className='btn btn-danger' onClick={onClickDeleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
      </form>
    </>
  )
}

export default EventForm;
