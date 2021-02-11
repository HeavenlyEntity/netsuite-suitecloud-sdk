/*
 ** Copyright (c) 2021 Oracle and/or its affiliates.  All rights reserved.
 ** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */

export const ADD_DEPENDENCIES = {
	ADDED: 'ADD_DEPENDENCIES_ADDED',
	ADDED_LOG: 'ADD_DEPENDENCIES_ADDED_LOG',
	ADDING: 'ADD_DEPENDENCIES_ADDING',
	EMPTY: 'ADD_DEPENDENCIES_EMPTY',
	ERROR: 'ADD_DEPENDENCIES_ERROR',
};

export const COMMAND = {
	ERROR: 'COMMAND_ERROR',
	SUCCESS: 'COMMAND_SUCCESS',
	TRIGGERED: 'COMMAND_TRIGGERED',
};

export const DEPLOY = {
	DEPLOYING: 'DEPLOY_DEPLOYING',
	QUESTIONS: {
		ACCOUNT_SPECIFIC_VALUES: 'DEPLOY_QUESTIONS_ACCOUNT_SPECIFIC_VALUES',
		APPLY_INSTALLATION_PREFERENCES: 'DEPLOY_QUESTIONS_APPLY_INSTALLATION_PREFERENCES',
	},
	QUESTIONS_CHOICES: {
		ACCOUNT_SPECIFIC_VALUES: {
			DISPLAY_WARNING: 'DEPLOY_QUESTIONS_CHOICES_ACCOUNT_SPECIFIC_VALUES_DISPLAY_WARNING',
			CANCEL_PROCESS: 'DEPLOY_QUESTIONS_CHOICES_ACCOUNT_SPECIFIC_VALUES_CANCEL_PROCESS',
		},
	},
};

export const LIST_OBJECTS = {
	LISTING: 'LIST_OBJECTS_LISTING',
};

export const UPLOAD_FILE = {
	UPLOADING: 'UPLOAD_FILE_UPLOADING',
	OVERWRITE_QUESTION: 'UPLOAD_FILE_OVERWRITE_FILE',
	PROCESS_CANCELED: 'UPLOAD_FILE_PROCESS_CANCELED',
};

export const UPDATE_OBJECT = {
	UPDATING: 'UPDATE_OBJECT_UPDATING',
	OVERRIDE: 'UPDATE_OBJECT_OVERRIDE',
	PROCESS_CANCELED: 'UPDATE_OBJECT_PROCESS_CANCELED',
};

export const MANAGE_ACCOUNTS = {
	LOADING: 'MANAGE_ACCOUNTS_LOADING',
	CANCELED: 'MANAGE_ACCOUNTS_CANCELED',
	AVAILABLE_CONNECTIONS: 'MANAGE_ACCOUNTS_AVAILABLE_CONNECTIONS',
	SELECT_CREATE: 'MANAGE_ACCOUNTS_SELECT_CREATE',
	CREATE: {
		BROWSER: 'MANAGE_ACCOUNTS_CREATE_BROWSER',
		CONTINUE_IN_BROWSER: 'MANAGE_ACCOUNTS_CREATE_CONTINUE_IN_BROWSER',
		BROWSER_CANCEL: 'MANAGE_ACCOUNTS_CREATE_BROWSER_CANCEL',
		NEW_AUTHID: 'MANAGE_ACCOUNTS_CREATE_NEW_AUTHID',
		ENTER_AUTH_ID: 'MANAGE_ACCOUNTS_ENTER_AUTH_ID',
		ENTER_URL: 'MANAGE_ACCOUNTS_ENTER_URL',
		SAVE_TOKEN: {
			SAVING_TBA: 'MANAGE_ACCOUNTS_CREATE_SAVE_TOKEN_SAVING_TBA',
			OPTION: 'MANAGE_ACCOUNTS_CREATE_SAVE_TOKEN_OPTION',
			ENTER_ACCOUNT_ID: 'MANAGE_ACCOUNTS_SAVE_TOKEN_ENTER_ACCOUNT_ID',
			ENTER_TOKEN_ID: 'MANAGE_ACCOUNTS_SAVE_TOKEN_ENTER_TOKEN_ID',
			ENTER_TOKEN_SECRET: 'MANAGE_ACCOUNTS_SAVE_TOKEN_ENTER_TOKEN_SECRET',
			SUCCESS: {
				NEW_TBA: 'MANAGE_ACCOUNTS_CREATE_SAVE_TOKEN_NEW_TBA',
			},
		},
	},
	CREATE_NEW: 'MANAGE_ACCOUNTS_CREATE_NEW',
	ERROR: {
		NOT_IN_PROJECT: 'MANAGE_ACCOUNTS_ERROR_NOT_IN_PROJECT',
	},
	SELECT_AUTH_ID: {
		SUCCESS: 'MANAGE_ACCOUNTS_SELECT_AUTH_ID_SUCCESS',
	},
};

export const EXTENSION_INSTALLATION = {
	IN_PROGRESS: 'EXTENSION_INSTALLATION_IN_PROGRESS',
	ERROR: {
		SDK_NOT_AVAILABLE: 'EXTENSION_INSTALLATION_ERROR_SDK_NOT_AVAILABLE',
		GENERAL_ERROR: 'EXTENSION_INSTALLATION_ERROR_GENERAL_ERROR',
		SDK_INVALID: 'EXTENSION_INSTALLATION_ERROR_SDK_INVALID',
	},
	SUCCESS: {
		SDK_DOWNLOADED: 'EXTENSION_INSTALLATION_SUCCESS_SDK_DOWNLOADED',
	},
};

export const ERRORS = {
	NO_ACTIVE_FILE_OR_WORKSPACE: 'ERRORS_NO_ACTIVE_FILE_OR_WORKSPACE',
	NO_ACTIVE_FILE: 'ERRORS_NO_ACTIVE_FILE',
	NO_ACTIVE_WORKSPACE: 'ERRORS_NO_ACTIVE_WORKSPACE',
	SDK_JAVA_VERSION_NOT_COMPATIBLE: 'ERRORS_SDK_JAVA_VERSION_NOT_COMPATIBLE',
	SDK_JAVA_VERSION_NOT_INSTALLED: 'ERRORS_SDK_JAVA_VERSION_NOT_INSTALLED',
};

export const DISMISS = 'DISMISS';
export const SEE_DETAILS = 'SEE_DETAILS';
export const YES = 'YES';
export const NO = 'NO';
