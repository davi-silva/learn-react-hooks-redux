/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as ModuleActions from '../../store/actions/modules';

function Sidebar() {
  const modules = useSelector((state) => state.modules);
  const dispatch = useDispatch();

  const handleToggleLesson = (module, lesson) => {
    dispatch(ModuleActions.toggleLesson(module, lesson));
  };

  return (
    <>
      <aside>
        {modules.modules.map((module, key) => (
          <div key={key}>
            <strong>{module.title}</strong>
            <ul>
              {module.lesson.map((lesson, key) => (
                <li key={key}>
                  {lesson.title}
                  <button
                    type="button"
                    onClick={() => {
                      handleToggleLesson(module, lesson);
                    }}
                  >
                    Toggle Leasson
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </>
  );
}

export default Sidebar;
