import { StyleSheet } from 'react-native';
import { colors } from '../../Theme/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  totalBox: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
    backgroundColor: colors.primarySoft,
    //backgroundColor: '#3c3c95ff',
    borderBottomWidth: 1,
    borderColor: '#BBF7D0',
  },
  boxtotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  totalLabel: {
    color: '#16A34A',
    fontSize: 14,
  },
  btnInfos: {
    marginLeft: 8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.textSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInfos: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 12,
  },
  totalValue: {
    color: '#16A34A',
    fontSize: 32,
    fontWeight: '700',
  },
  totalProducts: {
    marginTop: 4,
    color: colors.textSecondary,
    fontSize: 14,
  },

  item: {
    padding: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  itemSub: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  bold: {
    fontWeight: '600',
  },

  form: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#fff', // important
    color: '#000', // important
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
