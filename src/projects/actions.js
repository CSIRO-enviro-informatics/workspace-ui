
import { action } from '../utils';


export const PROJECTS_LIST = 'PROJECTS/LIST';
export const PROJECTS_SUCCEEDED = 'PROJECTS/SUCCEEDED';
export const PROJECTS_FAILED = 'PROJECTS/FAILED';

export const projectsList = action(PROJECTS_LIST);
export const projectsSucceeded = action(PROJECTS_SUCCEEDED);
export const projectsFailed = action(PROJECTS_FAILED, true);

export const CONTENTS_SUCCEEDED = 'CONTENTS/SUCCEEDED';
export const CONTENTS_FAILED = 'CONTENTS/FAILED';
export const CONTENTS_PATH = 'CONTENTS/PATH';

export const contentsSucceeded = action(CONTENTS_SUCCEEDED);
export const contentsFailed = action(CONTENTS_FAILED, true);
// TODO: contentsPath expects an object {project, path}
export const contentsPath = action(CONTENTS_PATH);

export const PROJECTS_ADD = 'PROJECTS/ADD';
export const PROJECTS_ADD_SUCCEEDED = 'PROJECTS/ADD/SUCCEEDED';
export const PROJECTS_ADD_FAILED = 'PROJECTS/ADD/FAILED';

export const createProject = action(PROJECTS_ADD);
export const createProjectSucceeded = action(PROJECTS_ADD_SUCCEEDED);
export const createProjectFailed = action(PROJECTS_ADD_FAILED);

export const PROJECTS_DELETE = 'PROJECTS/DELETE';
export const PROJECTS_DELETE_SUCCEEDED = 'PROJECTS/DELETE/SUCCEEDED';
export const PROJECTS_DELETE_FAILED = 'PROJECTS/DELETE/FAILED';

export const deleteProject = action(PROJECTS_DELETE);
export const deleteProjectSucceeded = action(PROJECTS_DELETE_SUCCEEDED);
export const deleteProjectFailed = action(PROJECTS_DELETE_FAILED);

export const FOLDER_ADD = 'CONTENTS/FOLDER/ADD';
export const FOLDER_ADD_SUCCEEDED = 'CONTENTS/FOLDER/ADD/SUCCEEDED';
export const FOLDER_ADD_FAILED = 'CONTENTS/FOLDER/ADD/FAILED';

export const addFolder = action(FOLDER_ADD);
export const addFolderSucceeded = action(FOLDER_ADD_SUCCEEDED);
export const addFolderFailed = action(FOLDER_ADD_FAILED, true);

export const FOLDER_DELETE = 'CONTENTS/FOLDER/DELETE';
export const FOLDER_DELETE_SUCCEEDED = 'CONTENTS/FOLDER/DELETE/SUCCEDED';
export const FOLDER_DELETE_FAILED = 'CONTENTS/FOLDER/DELETE/FAILED';

export const deleteFolder = action(FOLDER_DELETE);
export const deleteFolderSucceeded = action(FOLDER_DELETE_SUCCEEDED);
export const deleteFolderFailed = action(FOLDER_DELETE_FAILED, true);

export const FILE_UPLOAD = 'CONTENTS/FILE/UPLOAD';
export const FILE_UPLOAD_SUCCEEDED = 'CONTENTS/FILE/UPLOAD/SUCCEEDED';
export const FILE_UPLOAD_FAILED = 'CONTENTS/FILE/UPLOAD/FAILED';

export const uploadFile = action(FILE_UPLOAD);
export const uploadFileSucceeded = action(FILE_UPLOAD_SUCCEEDED);
export const uploadFileFailed = action(FILE_UPLOAD_FAILED);

export const FILE_DELETE = 'CONTENTS/FILE/DELETE';
export const FILE_DELETE_SUCCEEDED = 'CONTENTS/FILE/DELETE/SUCCEDED';
export const FILE_DELETE_FAILED = 'CONTENTS/FILE/DELETE/FAILED';

export const deleteFile = action(FILE_DELETE);
export const deleteFileSucceeded = action(FILE_DELETE_SUCCEEDED);
export const deleteFileFailed = action(FILE_DELETE_FAILED, true);

export const PROJECTS_STATS = 'PROJECTS/STATS';
export const PROJECTS_STATS_SUCCEEDED = 'PROJECTS/STATS/SUCCEEDED';
export const PROJECTS_STATS_FAILED = 'PROJECTS/STATS/FAILED';

export const getStats = action(PROJECTS_STATS);
export const getStatsSucceeded = action(PROJECTS_STATS_SUCCEEDED);
export const getStatsFailed = action(PROJECTS_STATS_FAILED, true);
