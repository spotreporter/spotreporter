import Gun from 'gun';
import { Report } from '../entities/Report';

export const gun = Gun<Record<string, Report>>(['http://192.168.178.39:8765/gun']);
