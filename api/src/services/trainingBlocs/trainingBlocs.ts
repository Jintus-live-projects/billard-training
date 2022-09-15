import {db} from "src/lib/db";

export const TableLayoutBloc = {
  layout: (_args, {root}) => db.layout.findUnique({
    where: {
      trainingBlocId: root.id
    }
  })
}
