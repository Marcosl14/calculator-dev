import { technologiesModel } from '../..';
import Technology from '../../domain/entities/technology.entity';

class TechnologyRepository {
  async findAll(): Promise<Technology[]> {
    return technologiesModel.find({});
  }

  async findOneById(id: string): Promise<any | null> {
    return technologiesModel.findById(id);
  }

  async findOneByName(name: string): Promise<any | null> {
    return technologiesModel.findOne({ name });
  }

  async exists(name: string): Promise<boolean> {
    return technologiesModel.exists({ name });
  }

  async save(technology: Technology): Promise<void> {
    technologiesModel.collection.insertOne({ name: technology.getName() }).catch(error => console.error(error));
  }

  async deleteById(id: string): Promise<void> {
    await technologiesModel.findByIdAndDelete(id);
  }
}

export default new TechnologyRepository();
