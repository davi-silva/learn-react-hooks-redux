/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';

const Video = () => {
  const module = useSelector((state) => ({
    activeModule: state.modules.activeModule,
  }));
  const lesson = useSelector((state) => ({
    activeLesson: state.modules.activeLesson,
  }));

  return (
    <div>
      <strong>
        Module:
        {module.activeModule.title}
      </strong>
      <br />
      <span>
        Leasson:
        {lesson.activeLesson.title}
      </span>
    </div>
  );
};

export default Video;
